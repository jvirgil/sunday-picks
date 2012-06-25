var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var gameSchema = new Schema({
		year: {type: Number, index: true }
	,	week: {type: Number, index: true }
	, homeTeam: String
	, awayTeam: String
	, spread: Number
	, homeScore: Number
	, awayScore: Number
	, lastUpdated: Date
	, gameState: String
});

module.exports = mongoose.model('Game', gameSchema);

