var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accRouter=require('./routes/acount');
var apiRouter= require('./routes/api');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'NDASHUDHAUHD3427328guisfjsdfkjshdjhsafkjsdfkeqwrw53454yrtfg',
  resave: true,
  saveUninitialized: true
  }));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/account',accRouter);
app.use('/api',apiRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //dia chi truy cap bang api:/api/xxxx
  if(req.originalUrl.indexOf('/api')==0){
    res.json(
      {
        msg:err.message
      }
    );
  }else{
    res.render('error');
  }
});

module.exports = app;
