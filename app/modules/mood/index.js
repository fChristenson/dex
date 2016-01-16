'use strict';

var U           = require('./utils');
var events      = require('events');
var moodEmitter = new events.EventEmitter();
var path        = require('path');
var fs          = require('fs');

module.exports = function(emitter, model) {

    var files = fs.readdirSync(__dirname);

    files.forEach(function(file) {

        if (file !== 'index.js' && /\.js$/.test(file)) {

            require(path.join(__dirname, file))(moodEmitter, model);

        }

    });

    emitter.on('message', function(channel, message, user) {

        var command = U.stringToCommand(message.text);

        if (command && command.type) {

            moodEmitter.emit(command.type, channel, command, user);

        }


    });

};
