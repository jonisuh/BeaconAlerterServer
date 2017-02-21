var mongoose = require('mongoose');

	var alertsschema = new mongoose.Schema({
	    time: Date,
	    title: String,
	    days: {
	    	mon : Boolean,
	    	tue : Boolean,
	    	wed : Boolean,
	    	thu : Boolean,
	    	fri : Boolean,
	    	sat : Boolean,
	    	sun : Boolean
	    },
	    repeating: Boolean,
	    isEnabled: Boolean,
	    id: String


	});

	mongoose.model('Alerts', alertsschema);