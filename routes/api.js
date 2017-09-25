var express = require('express');
var router = express.Router();


router.get('/task', function(req, res, next) {
  res.send('return apc');
});

module.exports = router;
