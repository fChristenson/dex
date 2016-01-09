'use strict';

var constants    = require('./app/config/constants.js');
var Slack        = require('slack-client');
var Model        = require('./app/model');
var Client       = require('./app');

var db           = require('seraph')({

  server: constants.DB_URI,
  user: constants.DB_USER,
  pass: constants.DB_PASSWORD

});

var model        = new Model(db);
var slack        = new Slack(constants.SLACK_TOKEN,
                      constants.SLACK_AUTO_RECONNECT,
                      constants.SLACK_AUTO_MARK);

var client = new Client(model, slack);

client.login();
