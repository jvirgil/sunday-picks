var Season = require('./models/season.js');

exports.modeltype = 'Season';

exports.create = function(err, data) {
	return new Season({
		name: data.name
	, year: data.year
	}).save();
};
	
