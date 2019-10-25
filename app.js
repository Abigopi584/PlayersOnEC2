const express = require('express');
const fs = require('fs');
const cron = require('node-cron');
const playersSeeder = require('./Seeders/PlayersSeeder');
const playerController = require('./Controllers/playerControllers');
const app = express();

playersSeeder();
const playerWriteStream = fs.createWriteStream('./output.log', { flags: 'a' });

cron.schedule("*/6 * * * * *", () => {
  console.log('Write to Output.log file every 10 sec');
  playerController(playerWriteStream);

});


app.listen(8080, () => {
  console.log('Running on PORT 8080');
});
