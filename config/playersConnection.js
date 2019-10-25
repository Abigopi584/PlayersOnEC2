const mongoose = require('mongoose');
const mongoUri = `mongodb://127.0.0.1/Players`;

async function playersDbConnection () {
  try {
    await mongoose.connect(mongoUri, { useNewUrlParser: true }).then(() => {
      console.log(`Connected Successfully`);
    })
      .catch((e) => {
        console.err(e);
        process.exit(1);
      });
  } catch (e) {
    console.err(e);
  }
}

module.exports = playersDbConnection;
