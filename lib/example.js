var mongoose = require('mongoose');
var Player = new (require('./models/player.js').PlayerModel);
var Season = require('./season.js');
var Game = new (require('./models/game.js').GameModel);

var fs = require('fs');
var sys = require('sys');

mongoose.connect('mongodb://localhost/sunday_picks_test');

//player.name = {first: "John", last: "Virgil" };
//console.log(Player.modeltype);

var err;

var season = Season.create(err, { name: 'Test Season 2', year: 2012 });
console.log("Created Season");
console.log(season);

Game.findWeek(2012,2,function(err,games) {
	console.log(games);
	return
});



parseTsvFile('gamefile.txt',function(parsedline) {
	if(parsedline.year) {
		var date = Date.parse(parsedline.date);
		console.log(parsedline.date + " - " + date);
	}
});

return;
exit;
/*
var player = Player.create(err, { name: { first: 'John', last: 'Virgil' }
	, login: 'howdy'
	, password: 'doodaa'
	, email: 'jvirgil@gmail.com'
	, current_season: season });

if (err)
	console.log('Error: ' + err);

console.log('Created Player');
console.log(player);
*/

console.log('Opening Players File.');
parseTsvFile('playerfile.txt', function(parsedLine) {
console.log("PLINE: " + parsedLine.firstname); 
	if(parsedLine.firstname) {
		var player;
		Player.create(err, season,  {name: { first: parsedLine.firstname, last: parsedLine.lastname }
			, login: parsedLine.login
			, password: parsedLine.password
			, email: parsedLine.email
			, current_season: season }, function(err,player){});
		console.log("Created Player: " + player);
	}
});

console.log('Opening Games File.');
parseTsvFile('gamefile.txt',function(parsedline) {
	if(parsedline.year) {
		var game;
		Game.create(err, parsedline, function(err, game) {
			var date = new Date(Date.parse(parsedline.date));
			console.log('Date: ' + date);
			console.log('Created Game : ' + game);
		});
//		console.log(parsedline.year + ' - ' + parsedline.week + ' - ' + parsedline.hometeam);
	}
});


function parseTsvFile(fileName, callback) {
	var stream = fs.createReadStream(fileName)
	var iteration = 0, header = [], buffer = ""

	var csvpattern = /(?:^|,)("(?:[^"]+)*"|[^,]*)/g
	var pattern = /(?:^|\t)("(?:[^"]+)*"|[^\t]*)/g

	stream.addListener('data', function(data) {
 		buffer += data.toString()
		var parts = buffer.split('\n')
		parts.forEach(function(d, i) {
			if(i == parts.length-1) return
			if(iteration++ == 0 && i == 0){
				header = d.split(pattern)
			} else {
				callback(buildRecord(d))
			}
    })
    buffer = parts[parts.length-1]
  })


  function buildRecord(str){
    var record = {}
    str.split(pattern).forEach(function(value, index){
      if(header[index] != '')
        record[header[index].toLowerCase()] = value.replace(/"/g, '')
    })
    return record
  }
}
