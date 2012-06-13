var playersCounter = 1;

PlayersProvider = function(){};
PlayersProvider.prototype.dummyData = [];

PlayersProvider.prototype.findAll = function(callback) {
	callback(null, this.dummyData);
};

PlayersProvider.prototype.findById = function(id, callback) {
	var result = null;
	for( var i = 0; i<this.dummyData.length; i++) {
		if( this.dummyData[i]._id == id) {
			result = this.dummyData[i];
			break;
		}
	}

	callback(null, result);
};

PlayersProvider.prototype.save = function(players, callback) {
	var player = null;

	if( typeof(players.length) == "undefined")
		players = [players];

	for( var i = 0; i < players.length; i++) {
		player = players[i];
		player._id = playersCounter++;
		player.created_at = new Date();

		this.dummyData[this.dummyData.length]= player;
	}

	callback(null, players);
};

// Bootstrap the games data set
new PlayersProvider().save([
	{name: 'Ruben James', login: 'howdy', password: 'doody', wins: 30, losses: 24, ties: 3, gamesback: 0 },
	{name: 'Gumba Tomai', login: 'howdy', password: 'doody', wins: 29, losses: 25, ties: 3, gamesback: 1},
	{name: 'Juan Carlos', login: 'howdy', password: 'doody', wins: 24, losses: 30, ties: 3, gamesback: 6 },
	{name: 'Ballo Bean', login: 'howdy', password: 'doody', wins: 24, losses: 30, ties: 3, gamesback: 6 }
], function(error, players){});

exports.PlayersProvider = PlayersProvider;
