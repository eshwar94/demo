var Promise = require('bluebird');
var Client = require('../models/Client')

module.exports = {

	create: function(username,password,gender,email){
		return new Promise(function(resolve, reject){
			var parameter = {
				username:username,
				password:password,
				gender:gender,
				email:email
			}
			Client.create(parameter,function(err,user){
				if(err){
					reject(err);
					return
				}

				resolve(user);

			})
		})
		
	},

	find: function(isRaw){
		return new Promise(function(resolve, reject){
			Client.find({}, function(err, user){
				if (err){
					reject(err)
					return
				}

				if (isRaw){
					resolve(user)
					return
				}

				resolve(user)
			})
		})
	},
}