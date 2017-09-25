var express = require('express')
var router = express.Router()
//we have to require all the contorllers(th eentire controllers)
var controllers = require('../controllers')


router.post('/', function(req, res, next){

	var username = req.body.username;
	var password = req.body.password;

	controllers.login.verify(username, password)
		.then((response) => {
			if(response.result == true){
				res.json({
					confirmation: 'success'
				})
			}else{
				res.json({
					confirmation: 'failed'
				})
			}
		})
		.catch((error) => {
			res.json({
				confirmation: 'failed'
			})
		})
	
})
 
module.exports = router
