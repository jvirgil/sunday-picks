var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var Season = require('../models/season.js');

var playerSchema = new Schema({
		name: {
				first: String
			, last: String
		}
	, login: {type: String, required: true, unique: true }
	, password: {type: String, required: true }
	, email: {type: String, required: true }
	, active: Boolean
	, seasons: [ {type: Schema.ObjectId, ref: Season }]
	, currentSeason: {type: Schema.ObjectId, ref: Season }
});

module.exports = mongoose.model('Player', playerSchema);


/*
var Player = function(){

	var mongoose = require('mongoose')
		, Schema = mongoose.Schema;

	var Season = require('./season.js');

	var playerSchema = new Schema({
			name: {
					first: String
				, last: String
			}
		, login: {type: String, required: true, unique: true }
		, password: {type: String, required: true }
		, email: {type: String, required: true }
		, active: Boolean
		, seasons: [ {type: Schema.ObjectId, ref: Season }]
		, currentSeason: {type: Schema.ObjectId, ref: Season }
	});

	var _model = mongoose.model('Player', playerSchema);
	var _findByEmail = function(email, fail, success) {
												_model.findOne({email:email}, function(err, doc) {
													if(err) {
														fail(err)
													} else {
														success(doc);
													}
												});
											}


	return {
		schema : playerSchema,
		model: _model,
		findByEmail : _findByEmail
	}

}();

*/
