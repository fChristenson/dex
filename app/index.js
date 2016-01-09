'use strict';

var U = require('./utils');

module.exports = function(model, slack) {

  slack.on('open', function() {

    console.log(slack.self.name, 'connected to', slack.team.name);

  });

  slack.on('message', function(message) {

    var channel = slack.getChannelGroupOrDMByID(message.channel);
    var user    = slack.getUserByID(message.user);
    var date    = new Date().toISOString();
    var command = U.stringToCommand(message.text);

    if (command.isWrite) {

      model.save(command.data, command.dataLabel)
        .then(function() {

          channel.send(U.commandToResponse(command));

        }).catch(function(error) {

          channel.send('Error: ' + error.message);

        });

    } else if (command.isHelp) {

      channel.send(U.getHelpMessage());

    } else {

      channel.send('I heard you');

    }

  });

  slack.on('error', function(error) {

    console.log(error);

  });

  return slack;

};
