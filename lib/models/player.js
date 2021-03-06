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

//module.exports = mongoose.model('Player', playerSchema);

mongoose.model('Player', playerSchema);

var Player = mongoose.model('Player');

PlayerModel = function(){};

PlayerModel.prototype.findAll = function(callback) {
	Player.find({}, function(err, players) { callback(null, players) } );
};

PlayerModel.prototype.create = function(err, season, playerdata, callback) {
	var player = new Player({

			name: { first: playerdata.name.first
							, last: playerdata.name.last
						}
		, login: playerdata.login
		, password: playerdata.password
		,	email: playerdata.email
		,	active: true
		,	seasons: [ season._id ]
		,	current_season: season.id
		});

  player.save(function(err) {
		if (err) console.log("Player - We have a problem." + err);
		callback(err, player);
	});
};

exports.PlayerModel = PlayerModel;
