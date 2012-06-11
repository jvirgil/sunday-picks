
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

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
// Game - Season, week number, hometeam, awayteam, hometeam spread, hometeam score, awayteam score, winner, time
// Player - name, belongs to Leagues
// Picks - Game, Player, pickedteam
// Stats - Player, week_number, wins, losses, ties, homepicks, awaypicks



var users = [
	{ name: 'Ru J', email: 'ruj@email.com' },
	{ name: 'Gumba T', email: 'tomas@email.com' },
	{ name: 'JC', email: 'jc@email.com' },
	{ name: 'Bean', email: 'bean@email.com' }	
];

// Routes

app.get('/', routes.index);

app.get('/users', function(req, res) {
	res.render('users', { title: 'Express', users: users });
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
