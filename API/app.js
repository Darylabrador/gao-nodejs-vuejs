const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const dotenv       = require('dotenv').config();
const bcrypt       = require('bcryptjs');

// import manual middleware
const headerApi = require('./middlewares/configApi');

// import routes files


// imports models files
const UserModel    = require('./models/users');


// relation between models
// ClientModel.hasMany(AssignModel);
// DesktopModel.hasMany(AssignModel, {onDelete: 'cascade'});
// AssignModel.belongsTo(ClientModel);
// AssignModel.belongsTo(DesktopModel);

// Imports controllers files


// Import database config file
const database = require('./config/database');

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
app.use(headerApi);

// Initiate all routes


// error handler

module.exports = app;
