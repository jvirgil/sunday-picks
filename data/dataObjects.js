var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var Season = new Schema({
		name: { type: String, index: { unique: true } }
	, year: Number
});

var Player = new Schema({
		name: {
				first: String
			, last: String
		}
	, login: { type: String, required: true, index: { unique: true, sparse: true } }
	, password: { type: String, required: true }
	, email: { type: String, required: true }
	, active: Boolean
	, seasons: [Season]
	, currentSeason: Season
});

var Game = new Schema({
		year: { type: Number, index: true }
	,	week: { type: Number, index: true }
	, homeTeam: String
	, awayTeam: String
	, spread: Number
	, homeScore: Number
	, awayScore: Number
	, lastUpdated: Date
});

var Picks = new Schema({
		season: Season
	, year: Number
	, games: [Game],
	, player: { type: Player, index: { sparse: true } }
	, pick: String
	, lastUpdated: Date
});

