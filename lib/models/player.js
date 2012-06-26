var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var Season = require('../models/season.js');

var playerSchema = new Schema({
		name: {
				first: String
			, last: String
		}
	, login: {type: String, required: true, unique: true }
	, password: {type: String, required: true }
	, email: {type: String, required: true }
	, active: Boolean
	, seasons: [ {type: Schema.ObjectId, ref: Season }]
	, currentSeason: {type: Schema.ObjectId, ref: Season }
});


/*
playerSchema.methods.findAllInSeason = function findAllInSeason(season,callback) {
	return this.model('Player').find({ "seasons" : ObjectId(season.ObjectId) }, callback);
};

playerSchema.methods.getAll = function getAll(callback) {
	var Player = mongoose.model('Player');
	Player.find({}, function(err, players) { callback(err, players); });
};

*/

//module.exports = mongoose.model('Player', playerSchema);

mongoose.model('Player', playerSchema);

var Player = mongoose.model('Player');

PlayerModel = function(){};

PlayerModel.prototype.findAll = function(callback) {
	Player.find({}, function(err, players) { callback(null, players) } );
};

exports.PlayerModel = PlayerModel;
