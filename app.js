var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var sassMiddleware = require('node-sass-middleware');

// Khởi tạo APP
var app = express();
// Call DB //////////////////////
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var __data = 'mongodb://127.0.0.1/demodb';
mongoose.connect(__data);
// Global
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Lỗi kết nối CSDL'));
// Call DB //////////////////////
// Gọi Template
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');
// Cấu hình
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'styles'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: app.get('env') === 'development' ? false : true
}));
app.use(express.static(path.join(__dirname, 'public')));
require('./app/routes')(app);

// Yoink
app.get('/logout', function (req, res, next) {
	req.logout()
	res.redirect("/")
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	if(req.app.get('env') === 'dev') {
		next(createError(404));
	} else{
		res.status(400);
		res.render('404.pug', { title: "404 We're sorry!", desc: "We couldn't find what you're looking for", btn: "» Go back to the main page" });
	}
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
