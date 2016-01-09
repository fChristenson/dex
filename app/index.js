'use strict';

var controllers = require('./controllers');
var packageJson = require('../package.json');
var express     = require('express');
var app         = express();
var bodyparser  = require('body-parser');

app.use(bodyparser.json());

app.get('/', function(req, res) {

  var instructions = {

    name: packageJson.name,
    description: packageJson.description

  };
  res.json(instructions);

});

app.get('/mood', controllers.mood.getMood);

module.exports = app;
