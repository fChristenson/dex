'use strict';

var U = require('./utils');

module.exports = function(emitter) {

    emitter.on('mood.help', function(channel, message) {

        // If a user types help we send back a message with the valid commands
        channel.send(U.getHelpMessage());

    });

};
