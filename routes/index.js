var express = require('express');
var router = express.Router();
var alex = require('alex')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {

  // do something with alex
  // return 
  let message = req.query.value
  //let result = alex.text('We’ve confirmed his identity.')
  let result = alex.text(message)
  //let result = "This is niraj"
  //res.render('index', { title: 'Express' });
  res.status(200).json(result)
});

module.exports = router;
