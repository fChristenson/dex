'use strict';

var U         = require('../../../utils');
var constants = require('../config/constants.js');

/**
 * {a:b}->String c
 *
 * Converts an object with moods into a string.
 * @author <fredrik.christenson@gmail.com>
 */
var getMoodMessage = function(data) {

    var str = 'The mood in our team is:\n';

    str += '* happy: '   + data[constants.MOODS[0]] + '\n';
    str += '* ok: '      + data[constants.MOODS[1]] + '\n';
    str += '* unhappy: ' + data[constants.MOODS[2]] + '\n';

    return str;

};

module.exports.getMoodMessage = getMoodMessage;

/**
 * String a->{a:b}
 *
 * Converts a command string to an object
 * with props.
 *
 * @author <fredrik.christenson@gmail.com>
 */
var stringToCommand = function(str) {

    str         = str.toLowerCase();
    var command = {};
    var match   = new RegExp('^' + constants.MOODS.join('|')).exec(str);

    if (/^help/.test(str)) {

        command.type = 'mood.help';

    } else if (match) {

        command.type = 'mood.save';
        command.mood = match ? match[0] : undefined;

    } else if (/^mood/.test(str)) {

        command.type = 'mood.read';

    }

    return command;

};

module.exports.stringToCommand = stringToCommand;

/**
 * _->a
 *
 * Returns a helpmessage with the commands accepted
 * by the bot interface.
 *
 * @author <fredrik.christenson@gmail.com>
 */
var getHelpMessage = function() {

    var msg = 'Hi!\n';

    msg += 'To tell me how you feel, ';
    msg += 'type one of the following words:\n';
    msg += U.stringToCodeString(constants.MOODS.join(', ')) + '\n';
    msg += 'To check the mood of our team type: ' + U.stringToCodeString('mood');

    return msg;

};

module.exports.getHelpMessage = getHelpMessage;
