var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost/my_database');

var seasonSchema = new Schema({
		name: { type: String, index: { unique: true } }
	, year: Number
});


var playerSchema = new Schema({
		name: {
				first: String
			, last: String
		}
	, login: { type: String, required: true, index: { unique: true, sparse: true } }
	, password: { type: String, required: true }
	, email: { type: String, required: true }
	, active: Boolean
	, seasons: [Season]
	, currentSeason: Season
});

var leagueSchema = new Schema({
		name: { type: String, required: true }
	,	players: [ {type: Schema.ObjectId, ref: 'Player' } ]
	, seasons: [ {type: Schema.ObjectId, ref: 'Season' } ]
}


var gameSchema = new Schema({
		year: { type: Number, index: true }
	,	week: { type: Number, index: true }
	, homeTeam: String
	, awayTeam: String
	, spread: Number
	, homeScore: Number
	, awayScore: Number
	, lastUpdated: Date
});

var picksSchema = new Schema({
		season: Season
	, year: Number
	, games: [Game],
	, player: { type: Player, index: { sparse: true } }
	, pick: String
	, lastUpdated: Date
});

mongoose.model('Player', playerSchema);

