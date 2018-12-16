/* eslint-disable global-require, func-names */
module.exports = function (app) {
  // home
   app.use('/',require('./controllers/index'));
   app.use('/addTask',require('./controllers/addTask'));
   app.use('/users',require('./controllers/users'));
   app.use('/user',require('./controllers/usersdetails'));
   app.use('/form',require('./controllers/form'));
   app.use('/save',require('./controllers/save'));
   app.use('/setting',require('./controllers/setting'));
   app.use('/home',require('./controllers/home'));
   app.use('/addUser',require('./controllers/addUser'));
   app.use('/saveTask',require('./controllers/saveTask'));
   app.use('/login',require('./controllers/login'));
   app.use('/check',require('./controllers/check'));
};
