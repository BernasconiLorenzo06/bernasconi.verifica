var express = require('express');
var router = express.Router();
const people = require('../persone.json');
/* GET users listing. */
router.get('/users', function(req, res, next) {
  
  res.send(people);

});
module.exports = router;