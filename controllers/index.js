var LoginController = require('./LoginController')
//var UserController = require('./UserController')
var UserController = require('./UserController')
var ClientController = require('./ClientController')
module.exports = {
	login: LoginController,
	user: UserController,
	client:ClientController
}
