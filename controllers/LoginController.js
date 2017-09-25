var Promise = require('bluebird')

module.exports = {

	verify: function(username, password){
		
		return new Promise(function(resolve, reject){
			
			if(username=="roy"&&password=="123"){
				resolve({result: true})
			}else{
				resolve({result: false})
			}
				
			reject({result: false})

		})
		


	},

}