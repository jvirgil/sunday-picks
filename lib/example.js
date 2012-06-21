var mongoose = require('mongoose');
var Player = require('./player.js');
var Season = require('./season.js');

mongoose.connect('mongodb://localhost/sunday_picks_test');

//player.name = {first: "John", last: "Virgil" };
//console.log(Player.modeltype);

var err;

var season = Season.create(err, { name: 'Test Season 2', year: 2012 });
console.log("Created Season");
console.log(season);

/*
var player = Player.create(err, { name: { first: 'John', last: 'Virgil' }
	, login: 'howdy'
	, password: 'doodaa'
	, email: 'jvirgil@gmail.com'
	, current_season: season });

console.log('Created Player');
console.log(player);
*/


