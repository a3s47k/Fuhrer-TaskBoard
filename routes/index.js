var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	$(function () {
		$("#datepicker").datepicker();
		console.log('asdasd')
	});
	
  res.render('index', { title: 'FullStack Vietnam' });
});

module.exports = router;
