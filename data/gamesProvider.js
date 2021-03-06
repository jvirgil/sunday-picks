var gamesCounter = 1;

GamesProvider = function(){};
GamesProvider.prototype.dummyData = [];

GamesProvider.prototype.findAll = function(callback) {
	callback(null, this.dummyData);
};

GamesProvider.prototype.findById = function(id, callback) {
	var result = null;
	for( var i = 0; i<this.dummyData.length; i++) {
		if( this.dummyData[i]._id == id) {
			result = this.dummyData[i];
			break;
		}
	}

	callback(null, result);
};

GamesProvider.prototype.findByWeek = function(week, callback) {
	var result = [];

	for ( var i = 0; i<this.dummyData.length; i++) {
		if ( this.dummyData[i].week == week) {
			result.push(this.dummyData[i]);
		}
	}

	callback(null, result);
};

GamesProvider.prototype.save = function(games, callback) {
	var game = null;

	if( typeof(games.length) == "undefined")
		games = [games];

	for( var i = 0; i < games.length; i++) {
		game = games[i];
		game._id = gamesCounter++;
		game.created_at = new Date();

		this.dummyData[this.dummyData.length]= game;
	}

	callback(null, games);
};

// Bootstrap the games data set
new GamesProvider().save([
	{year: '2012', week: '1', hometeam: 'Jacksonville', awayteam: 'Jets', spread: '3', homescore: 0, awayscore: 0 },
	{year: '2012', week: '1', hometeam: 'Giants', awayteam: 'Philadelphia', spread: '-6', homescore: 0, awayscore: 0 },
	{year: '2012', week: '1', hometeam: 'Houston', awayteam: 'Baltimore', spread: '-3.5', homescore: 0, awayscore: 0 },
	{year: '2012', week: '1', hometeam: 'Buffalo', awayteam: 'Cleveland', spread: '-10', homescore: 0, awayscore: 0 },
	{year: '2012', week: '1', hometeam: 'Arizona', awayteam: 'New England', spread: '14', homescore: 0, awayscore: 0 },
	{year: '2012', week: '2', hometeam: 'Houston', awayteam: 'Pittsburgh', spread: '1', homescore: 0, awayscore: 0 },
	{year: '2012', week: '2', hometeam: 'New Orleans', awayteam: 'San Francisco', spread: '-17', homescore: 0, awayscore: 0 },
	{year: '2012', week: '2', hometeam: 'San Diego', awayteam: 'Cincinnati', spread: '-4.5', homescore: 0, awayscore: 0 },
	{year: '2012', week: '2', hometeam: 'Carolina', awayteam: 'Jets', spread: '-10', homescore: 0, awayscore: 0 },
	{year: '2012', week: '2', hometeam: 'Arizona', awayteam: 'Miami', spread: '2', homescore: 0, awayscore: 0 }
], function(error, games){});

/*
new GamesProvider().save([
	{season: '2012', week: '1', hometeam: 'Jacksonville', awayteam: 'Jets', spread: '3', homescore: 0, awayscore: 0 }
], function(error, games){});
*/
exports.GamesProvider = GamesProvider;
