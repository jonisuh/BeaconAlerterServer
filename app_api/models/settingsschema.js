var mongoose = require('mongoose');
	var SchemaTypes = mongoose.Schema.Types;

	var settingschema = new mongoose.Schema({
	  	alertSound: String,
	  	hourMode: String,
	  	snoozeOn: Boolean,
	  	snoozeLength: Number,
	  	snoozeAmount: Number,
	  	soundVolume: {
	  		type: SchemaTypes.Double
	  	},
		automaticSync: Boolean,
		dateFormat: String
	});

	mongoose.model('Settings', settingschema);