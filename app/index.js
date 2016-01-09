'use strict';

var models      = require('./models');
var controllers = require('./controllers');
var packageJson = require('../package.json');
var express     = require('express');
var app         = express();
var bodyparser  = require('body-parser');
var constants   = require('./config/constants.js');
var db          = require('seraph')({

  server: constants.DB_URI,
  user: constants.DB_USER,
  pass: constants.DB_PASSWORD

});

var loadedModels = models(db);

app.use(bodyparser.json());

app.use(function(req, res, next) {

  req.models = loadedModels;
  return next();

});

app.get('/', function(req, res) {

  var instructions = {

    name: packageJson.name,
    description: packageJson.description

  };

  res.json(instructions);

});

app.get('/mood', controllers.mood.getMood);
app.get('/moods', controllers.mood.getMoods);

module.exports = app;
