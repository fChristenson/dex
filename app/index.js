'use strict';

var constants = require('./config/constants.js');
var R         = require('ramda');
var U         = require('./utils');
var fs        = require('fs');
var path      = require('path');

module.exports = function(emitter, model, slack) {

    // load modules
    var files = fs.readdirSync(path.join(__dirname, 'modules'));

    files.forEach(function(file) {

        require(path.join(__dirname, 'modules', file))(emitter, model);

    });

    slack.on(constants.strings.SLACK_OPEN_EVENT, function() {

        console.log(slack.self.name, 'connected to', slack.team.name);

    });

    slack.on(constants.strings.SLACK_MESSAGE_EVENT, function(message) {

        var channel = slack.getChannelGroupOrDMByID(message.channel);
        var user    = slack.getUserByID(message.user);

        emitter.emit('message', channel, message, user);

    });

    slack.on(constants.strings.SLACK_ERROR_EVENT, function(error) {

        console.log(error);

    });

    return slack;

};
