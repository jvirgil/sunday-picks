var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var seasonSchema = new Schema({
		name: {type: String, unique: true}
	, year: Number
});

module.exports = mongoose.model('Season', seasonSchema);

