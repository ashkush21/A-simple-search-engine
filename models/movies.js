var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
	movieName: String,
	year: String,
	imdb: String,
	votes: String,
	awards: String,
	language: String,
	altText: String
});

module.exports = mongoose.model("movie", movieSchema);