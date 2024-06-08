const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  disc: String,
  image: String,
  rating: String,
});

const movieDB = mongoose.model("movieTbl", movieSchema);

module.exports = movieDB