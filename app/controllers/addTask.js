var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addTask', { title: 'Add Task' });
});

module.exports = router;
