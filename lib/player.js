var Player = require('./models/player.js');

exports.modeltype = 'Player';

exports.create = function(err, data) {
/*
	if (typeof this.modeltype === "undefined") {
		throw (err);
	}

	if (this.modeltype != 'Player') {
		err = "Object passed to function is not a Player Object.";
		throw (err);
	}
*/
	var player = new Player({
				name: {
						first: data.name.first
					, last: data.name.last
				}
			, login: data.login
			, password: data.password
			, email: data.email
			, active: true
			, seasons: [ data.current_season._id ]
			, currentSeason: data.current_season._id
			});
	player.save();
	return player;
};


/*
I have no idea what the fuck I'm doing!!!

exports.findAll = function(err, callback) {
	var player 
	Player().find({}, callback);
};


exports.findAll = function(err, callback) {
	Player.find({}, function(err)
		if (!err) { 
			console.log(callback);
			callback
		}
		else { throw err;}
		
		console.log('Hiiii');
);

*/
