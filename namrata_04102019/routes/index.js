var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/signup', function(req, res, next) {
  console.log('signup');
  res.render('signup', { title: 'Express' });
});
module.exports = router;
