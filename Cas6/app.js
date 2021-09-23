var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// !!!!! MOZE DA IMA SAMO EDNA RUTA

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var countriesRouter = require('./routes/countries');
// var employeesRouter = require('./routes/employees');
var carsRouter = require('./routes/cars');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// !!!!! MOZE DA IMA SAMO EDNA RUTA

// app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/', countriesRouter);
// app.use('/', employeesRouter);
app.use('/', carsRouter);

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
  res.render('error');
});

module.exports = app;
