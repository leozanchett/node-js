var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'NEW PAGE !', message: 'Hello World!' });
});

module.exports = router;
