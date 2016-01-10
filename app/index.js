'use strict';

var R = require('ramda');
var U = require('./utils');

module.exports = function(model, slack) {

  slack.on('open', function() {

    console.log(slack.self.name, 'connected to', slack.team.name);

  });

  slack.on('message', function(message) {

    // We get the channel and the user data
    var channel = slack.getChannelGroupOrDMByID(message.channel);
    var command = U.stringToCommand(message.text);
    var user = slack.getUserByID(message.user);
    var date;
    var data;
    var hash;

    if (command.isWrite) {
      // users id are hashed to keep everything anonymous
      hash = require('crypto').createHash('sha256')
                              .update(user.id, 'utf8')
                              .digest('base64');

      date = U.todayAsMilliseconds(); // users mood are recorded on a daily basis

      model.find({userId: hash, date: date}, 'mood')
        .then(function(results) {
          // if this use has already submitted a mood for today, get the id of the mood
          var id = (results.length > 0) ? results[0].id : undefined;

          data = {mood: command.mood, date: date, userId: hash, id: id};
          return model.save(data, 'mood'); // updates if an id is provided, saves otherwise

        })
        .then(function(data) {

          var response = R.compose(R.add('Your mood is '), R.prop('mood'));
          channel.send(response(data));

        })
        .catch(function(error) {

          var response = R.compose(R.add('Error: '),  R.prop('message'));
          channel.send(response(error));

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
