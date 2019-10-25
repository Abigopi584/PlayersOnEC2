const Players = require('../models/players');
const playersDBConnection = require('../config/playersConnection');

const seeders = () => {
  let initialUserInfo = [
    {
      name: 'Aaron DonalD',
      team: 'rams',
      rank: 7,
      game: 'football',
    }, {
      name: 'Drew Bress',
      team: 'rams',
      rank: 8,
      game: 'football',
    }, {
      name: 'Khalil Mack',
      team: 'bears',
      rank: 16,
      game: 'football',
    }, {
      name: 'Pat Mahomes',
      team: 'chiefs',
      rank: 25,
      game: 'football',
    }, {
      name: 'Todd Gurley',
      team: 'rams',
      rank: 6,
      game: 'football',
    }, {
      name: 'Tom Brady',
      team: 'patriots',
      rank: 1,
      game: 'football',
    }, {
      name: 'Antonio Brown',
      team: 'Raiders',
      rank: 2,
      game: 'football',
    }, {
      name: 'Aaron Rodgers',
      team: 'Packers',
      rank: 10,
      game: 'football',
    }, {
      name: 'ALEX OVECHKIN',
      team: 'Raiders',
      rank: 2,
      game: 'washington',
    }, {
      name: 'Sidney Crossby',
      team: 'Packers',
      rank: 10,
      game: ' Pittsburgh Penguins',
    },
  ];
  if (Players.length > 0) {
    Players.create(initialUserInfo, (err) => {
      if (err) throw err;
      else console.log('Initial Seeding Successful');
    });
  }
}

module.exports = async () => {
  await playersDBConnection();
  await seeders();
}
