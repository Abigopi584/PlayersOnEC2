const playerModel = require('../models/players');

module.exports = async (writeStream) => {
  const players = await playerModel.aggregate([
    {
      $match:
          { game: "football" },
    },
    {
      $group:
        {
          _id: "$team",
          players: { $addToSet: { name: "$name", rank: "$rank" } },
        },
    },
    {
      $project:
          {
            _id: 1,
            players: 1,
          },
    },
  ]);

  players.forEach((player) => {
    let updatedPlayer = player;
    updatedPlayer.timeStamp = parseInt((new Date().getTime() / 1000)
      .toFixed(0));
    writeStream.write(JSON.stringify(updatedPlayer) + '\r\n');
  });

  writeStream.write('-----------------------------------\n');

}
