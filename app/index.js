'use strict';

var constants    = require('./config/constants.js');
var R            = require('ramda');
var U            = require('./utils');

module.exports = function(emitter, model, slack) {

  slack.on(constants.strings.SLACK_OPEN_EVENT, function() {

    console.log(slack.self.name, 'connected to', slack.team.name);

  });

  slack.on(constants.strings.SLACK_MESSAGE_EVENT, function(message) {

    // We get the channel and the user data
    var channel = slack.getChannelGroupOrDMByID(message.channel);
    var command = U.stringToCommand(message.text);
    var user    = slack.getUserByID(message.user);

    emitter.emit('mood', channel, command, user);

  });

  slack.on(constants.strings.SLACK_ERROR_EVENT, function(error) {

    console.log(error);

  });

  return slack;

};
