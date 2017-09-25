'use strict';
var mongoose = require('mongoose')

var ClientSchema = new mongoose.Schema({
	username: {type:String, trim:true, lowercase:true, default:''},
	password: {type:String, default:''},
	gender: {type:String, default:''},
	email: {type:String, default:''},
})

ClientSchema.methods.summary = function(){
	var summary = {
		id: this._id.toString(),
		username: this.username,
		password: this.password,
		gender: this.gender,
		email: this.email
	}
	return summary
}

module.exports = mongoose.model('ClientSchema', ClientSchema);