'use strict';

var constants = require('./config/constants.js');
var R         = require('ramda');
var U         = require('./utils');

module.exports = function(emitter, model) {

    emitter.on('mood.read', function(channel, message) {

        var data;

        model.count({mood: constants.MOODS[0]}, 'mood').then(function(d) {

            data = d;
            return model.count({mood: constants.MOODS[1]}, 'mood');

        }).then(function(d) {

            data = R.merge(data, d);
            return model.count({mood: constants.MOODS[2]}, 'mood');

        }).then(function(d) {

            data = R.merge(data, d);
            channel.send(U.getMoodMessage(data));

        }).catch(function(error) {

            // if we hit an error we report it back to the slack channel
            var response = R.compose(R.add('Error: '),  R.prop('message'));
            channel.send(response(error));

        });

    });
};
