var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var Season = require('../models/season.js');
var Player = require('../models/player.js');
var Game = require('../models/game.js');

var pickSchema = new Schema({
		season: {type: Schema.ObjectId, ref: Season }
	, year: Number
	,	player: {type: Schema.ObjectId, ref: Player }
	, game: {type: Schema.ObjectId, ref: Game }
	, pick: String
	, lastUpdated: Date
});

module.exports = mongoose.model('Pick', pickSchema);

