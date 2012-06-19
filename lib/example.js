var mongoose = require('mongoose');
var player = require('./player.js');

mongoose.connect('mongodb://localhost/sunday_picks_test');

player.name.first = "John";

console.log(player);
