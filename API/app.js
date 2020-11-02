const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const dotenv       = require('dotenv').config();
const bcrypt       = require('bcryptjs');

// import manual middleware


// import routes files


// imports models files
const UserModel    = require('./models/users');
const ClientModel  = require('./models/clients');
const DesktopModel = require('./models/desktops');
const AssignModel  = require('./models/assigns');

// relation between models
ClientModel.hasMany(AssignModel);
DesktopModel.hasMany(AssignModel, {onDelete: 'cascade'});
AssignModel.belongsTo(ClientModel);
AssignModel.belongsTo(DesktopModel);

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


// Initiate all routes


// error handler


// Initiate database connection sync 
var defaultAdminMail = "admin@gmail.com";

database
    // .sync({force: true})
    .sync()
    .then((result) => {
        console.log("Connected to database")
        return UserModel.findOne({ 
            where: { 
                mail: defaultAdminMail
            } 
        })
    }).then((userExist) => {
        if(!userExist) {
            bcrypt.hash('password', 12).then(hashedPwd => {
                const adminUser = new UserModel({
                    mail: defaultAdminMail,
                    password: hashedPwd
                });
                adminUser.save();
            })
        }
    })
    .catch(err => console.log(err))

module.exports = app;
