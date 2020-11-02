const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');

// import routes files
const indexRouter = require('./routes/index');

// imports models files


// Imports controllers files


// Import database config file


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use middleware


// Initiate all routes
app.use('/', indexRouter);


// error handler


// Initiate database connection sync 


module.exports = app;
