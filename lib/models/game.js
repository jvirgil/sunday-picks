var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var gameSchema = new Schema({
		year: {type: Number, index: true }
	,	week: {type: Number, index: true }
	, gameDate: {type: Date }
	, homeTeam: String
	, awayTeam: String
	, spread: Number
	, homeScore: Number
	, awayScore: Number
	, lastUpdated: Date
	, gameState: String
	, startTime: String
});

mongoose.model('Game', gameSchema);

var Game = mongoose.model('Game');

GameModel = function(){};

GameModel.prototype.findAll = function(callback) {
	Game.find({},function(err, games) { callback(null, games) } );
};

GameModel.prototype.findWeek = function(year, week, callback) {
	Game.find({ "week": week, "year": year }
							, []
							, { sort:{ "gameDate" : 1, "startTime": 1}}
							, function(err, games) { callback(err, games) } );
};

GameModel.prototype.create = function(err, gamedata, callback) {
  var game = new Game({
			year: gamedata.year
		, week: gamedata.week
		, gameDate: (!gamedata.date) ? new Date(Date.parse("2000-09-15")) : new Date(Date.parse(gamedata.date))
		, homeTeam: gamedata.hometeam
		, awayTeam: gamedata.awayteam
		, spread: (!gamedata.spread) ? 0 : gamedata.spread
		, homeScore: (!gamedata.homescore) ? 0 : gamedata.homescore
		, awayScore: (!gamedata.awayscore) ? 0 : gamedata.awayscore
		, lastUpdate: Date.now()
		, gameState: "Did Not Start"
		, startTime: gamedata.starttime
    });

  game.save(function(err) {
    if (err) console.log("Game - We have a problem." + err);
    callback(err, game);
  });
};

exports.GameModel = GameModel;

