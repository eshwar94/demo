var Promise = require('bluebird');
var User = require('../models/User')

module.exports = {


	create: function(username,password){
		return new Promise(function(resolve, reject){
			var parameter = {
				username:username,
				password:password 
			}
			User.create(parameter,function(err,user){
				if(err){
					reject(err);
					return
				}

				resolve(user);

			})
		})
		
	},

    update: function(id,username,password){ 
    	return new Promise(function(resolve,reject){
    		var parameter = { 
               username:username,
               password:password
    		}
            User.findByIdAndUpdate(id,parameter,{ new: true },function(err,user){
            	if(err){
            		reject(err);
            		return
            	}

            	resolve(user);

            })

    	})

     },

    delete: function(id){
      return new Promise(function(resolve,reject){
      	User.findByIdAndRemove(id, function(err){
        if(err){
          reject(err);
          return
        }

        resolve(null);
      })

      })
    },


    findById: function(id){
    	return new Promise(function(resolve,reject){
	    	
    		User.findById(id, function(err,user){
    			if (err){
					reject(err)
					return
				}

				resolve(user);

    		})
    	})
    },

    find: function(isRaw){
		return new Promise(function(resolve, reject){
			User.find({}, function(err, user){
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


