/*
	The medthods needed to show weeks
*/
//var PlayersProvider = require('../data/playersProvider').PlayersProvider;
var GamesProvider = require('../data/gamesProvider').GamesProvider;

var gamesProvider = new GamesProvider();
//var playersProvider = new PlayersProvider();

var PlayerModel = new (require('../lib/models/player.js').PlayerModel);

module.exports = function(app, current_week) {

		app.get('/week', function(req,res) {
		// need to embed the season the user is looking at and should pass this in at some point
			PlayerModel.findAll(function(error, players) {
				gamesProvider.findByWeek(current_week, function(error, games) {
					res.render('index', { games: games, players: players });
				});
			});
		});

		app.get('/week/:weeknum', function(req,res) {
			var weeknum = req.params.weeknum;
			// need to put some error handling/checking on the weeknumber
			PlayerModel.findAll(function(error, players) {
				gamesProvider.findByWeek(weeknum, function(error, games) {
					res.render('index', { games: games, players: players });
				});
			});
		});

};
