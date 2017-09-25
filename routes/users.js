var express = require('express')
var router = express.Router()
var controllers = require('../controllers')




//create
router.post('/', function(req, res, next) {
  
  var username = req.body.username;
  var password = req.body.password;

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

  controllers.user.create(username,password)
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

  // res.json({
  //   err: false,
  //   username:username,
  //   password:password
  // })

})

//update
router.post('/update', function(req,res,next){

  var username = req.body.username;
  var password = req.body.password;
  var id = req.body.id;

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

  controllers.user.update(id,username,password)
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

//delete
router.delete('/delete',function(req,res,next){

  var id = req.body.id;

   controllers.user.delete(id)
  .then((response) =>{
    res.json({
      err:false,
      data: response
    })
  })

  .catch((err) =>{
    res.json({
      err:true,
      error:err
    })
  })
})
 
//find by Id
router.get('/findbyid', function(req,res,next){
   var id = req.query.id;
  controllers.user.findById(id)
   .then((response) =>{
      res.json({
        err:false,
        data:response
      })
    })

    .catch((err) =>{
      res.json({
        confirmation: 'fail',
        message: err
      })
    })
})


//find all
router.get('/find', function(req,res,next){
  controllers.user.find(req.query,false)

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

