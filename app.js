
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var mongoose = require('mongoose');

var PlayersProvider = require('./data/playersProvider').PlayersProvider;
var GamesProvider = require('./data/gamesProvider').GamesProvider;

var app = module.exports = express.createServer();

mongoose.connect('mongodb://localhost/sunday_picks_test');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

//Database
// Season - year
// Game - Season, week number, hometeam, awayteam, hometeam spread, hometeam score, awayteam score, winner, last_updated, created_at
// Player - name, belongs to Leagues
// Picks - Season, Year, Game, Player, pickedteam
// Stats - Player, week_number, wins, losses, ties, homepicks, awaypicks



var users = [
	{ name: 'Ru J', email: 'ruj@email.com' },
	{ name: 'Gumba T', email: 'tomas@email.com' },
	{ name: 'JC', email: 'jc@email.com' },
	{ name: 'Bean', email: 'bean@email.com' }	
];

// Routes

var gamesProvider = new GamesProvider();
var playersProvider = new PlayersProvider();
var current_week = 2;

require('./routes/week')(app, current_week);



app.get('/', function(req, res) {
	playersProvider.findAll(function(error, players) {
		gamesProvider.findByWeek(current_week, function(error, games) {
			res.render('index', { games: games, players: players });
		});
	});
});


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
