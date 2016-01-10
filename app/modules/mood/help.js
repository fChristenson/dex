'use strict';

var U            = require('../../utils');

module.exports = function(emitter) {

    emitter.on('mood', function(channel, message) {

        if (message.type !== 'help') return;

        // If a user types help we send back a message with the valid commands
        channel.send(U.getHelpMessage());

    });

};
