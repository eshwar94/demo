var express = require('express')
var router = express.Router()
var controllers = require('../controllers')

//create clients
router.post('/', function(req, res, next) {
  
  var username = req.body.username;
  var password = req.body.password;
  var gender = req.body.gender;
  var email = req.body.email;

  if(username==null)
  {
    res.json({
      err: true,
      message: "Username is required"
    })
  }

  if(password==null)
  {
    res.json({
      err:true,
      message: "Password is required"
    })
  }

  if(gender==null)
  {
    res.json({
      err: true,
      message: "Gender is required"
    })
  }

  if(email==null)
  {
    res.json({
      err: true,
      message: "Email is required"
    })
  }
  

  controllers.client.create(username,password,gender,email)
   .then((response) =>{
     res.json({
      err: false,
      data: response
     })
   })
   .catch((err) =>{
     res.json({
      err:true,
      error: err
     })

   })
})

//find all clients
router.get('/find', function(req,res,next){
  controllers.client.find(req.query,false)

    .then(function(response) {
      res.json({
        confirmation: 'success',
        data: response
      })
    })
    .catch(function(err) {
      res.json({
        confirmation: 'fail',
        message: err
      })
    })
})


module.exports = router
