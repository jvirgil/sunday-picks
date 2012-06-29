/*
	The medthods needed to show weeks
*/

var PlayerModel = new (require('../lib/models/player.js').PlayerModel);
var GameModel = new (require('../lib/models/game.js').GameModel);

module.exports = function(app, current_week) {

		app.get('/week', function(req,res) {
		console.log('Current Week: ' + current_week);
		// need to embed the season the user is looking at and should pass this in at some point
			PlayerModel.findAll(function(error, players) {
				GameModel.findWeek(2012, current_week, function(error, games) {
					res.render('index', { games: games, players: players });
				});
			});
		});

		app.get('/week/:weeknum', function(req,res) {
			var weeknum = req.params.weeknum;
			// need to put some error handling/checking on the weeknumber
			PlayerModel.findAll(function(error, players) {
				GameModel.findWeek(2012, weeknum, function(error, games) {
					res.render('index', { games: games, players: players });
				});
			});
		});

};
