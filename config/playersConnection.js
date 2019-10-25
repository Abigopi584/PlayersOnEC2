const mongoose = require('mongoose');

async function playersDbConnection () {
  try {
    // eslint-disable-next-line max-len
    await mongoose.connect('mongodb://abigopi584:abibala8@ds241097.mlab.com:41097/players',
      { useNewUrlParser: true }).then(() => {
      console.log(`Connected Successfully`);
    })
      .catch((e) => {
        console.log(e);
        process.exit(1);
      });
  } catch (e) {
    console.log(e);
  }
}

module.exports = playersDbConnection;
