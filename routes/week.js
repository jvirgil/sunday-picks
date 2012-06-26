/*
	The medthods needed to show weeks
*/
var PlayersProvider = require('../data/playersProvider').PlayersProvider;
var GamesProvider = require('../data/gamesProvider').GamesProvider;

var gamesProvider = new GamesProvider();
var playersProvider = new PlayersProvider();

var Players = require('../lib/player.js');

module.exports = function(app, current_week) {

		app.get('/week', function(req,res) {
			console.log("TYPE: " + Players.modeltype);

// need to embed the season the user is looking at and should pass this in at some point
			Players.getAll(function(error, players) {
				console.log('HERE : ' + players);
//			playersProvider.findAll(function(error, players) {
				gamesProvider.findByWeek(current_week, function(error, games) {
					res.render('index', { games: games, players: players });
				});
			});
		});

		app.get('/week/:weeknum', function(req,res) {
			var weeknum = req.params.weeknum;
			// need to put some error handling/checking on the weeknumber
			playersProvider.findAll(function(error, players) {
				gamesProvider.findByWeek(weeknum, function(error, games) {
					res.render('index', { games: games, players: players });
				});
			});
		});

};
