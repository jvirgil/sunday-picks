var Game = require('./models/game.js');

exports.modeltype = 'Game';

exports.create = function(err, data) {
	var game = new Game({
				year: data.year
			, week: data.week
			, date: Date.parse(data.date)
			, homeTeam: data.hometeam 
			, awayTeam: data.awayteam
			,	spread: data.spread
			,	homeScore: (!data.homescore) ? 0 : data.homescore
			, awayScore: (!data.awayscore) ? 0 : data.awayscore
			, lastUpdate: Date.now()
			, gameState: 'Did Not Start'
			, startTime: data.starttime
		});
	game.save();
	return game;
};

