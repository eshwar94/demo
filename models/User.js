'use strict';
var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	username: {type:String, trim:true, lowercase:true, default:''},
	password: {type:String, default:''},
})

UserSchema.methods.summary = function(){
	var summary = {
		id: this._id.toString(),
		username: this.username,
		password: this.password
	}
	return summary
}

module.exports = mongoose.model('UserSchema', UserSchema);