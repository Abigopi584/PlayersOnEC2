const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  team: String,
  rank: Number,
  game: String,
});

const Players = mongoose.model('Players', playerSchema);

module.exports = Players;
