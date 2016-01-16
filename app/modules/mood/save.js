'use strict';

var R      = require('ramda');
var U      = require('../../utils');
var crypto = require('crypto');

module.exports = function(emitter, model) {

    emitter.on('mood.save', function(channel, message, user) {

        // users id are hashed to keep everything anonymous
        var date = U.todayAsMilliseconds(); // users mood are recorded on a daily basis
        var hash = crypto
            .createHash('sha256')
            .update(user.id, 'utf8')
            .digest('base64');


        model.find({userId: hash, date: date}, 'mood').then(function(results) {

            // if this use has already submitted a mood for today, get the id of the mood
            var id = (results.length > 0) ? results[0].id : undefined;
            var data = {mood: message.mood, date: date, userId: hash, id: id};

            return model.save(data, 'mood'); // updates if an id is provided, saves otherwise

        }).then(function(data) {

            // data has been saved so we get the saved mood and send back a confirmation
            var response = R.compose(R.add('Your mood is '), R.prop('mood'));
            channel.send(response(data));

        }).catch(function(error) {

            // if we hit an error we report it back to the slack channel
            var response = R.compose(R.add('Error: '),  R.prop('message'));
            channel.send(response(error));

        });

    });

};
