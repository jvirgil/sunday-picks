var Season = require('./models/season.js');

exports.modeltype = 'Season';

exports.create = function(err, data) {
	var season = new Season({
		name: data.name
	, year: data.year
	});

	season.save();
	return season;
};
	
