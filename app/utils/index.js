'use strict';

var constants = require('../config/constants.js');

/**
 * String a->{a:b}
 *
 * Converts a command string to an object
 * with props.
 *
 * @author <fredrik.christenson@gmail.com>
 */
var stringToCommand = function() {

  return {isHelp: true};

};

module.exports.stringToCommand = stringToCommand;

/**
 * a->b
 *
 * Returns a string with "`" around the
 * provided value.
 *
 * @author <fredrik.christenson@gmail.com>
 */
var stringToCodeString = function(val) {

  return '`' + val + '`';

};

module.exports.stringToCodeString = stringToCodeString;

/**
 * _->a
 *
 * Returns a helpmessage with the commands accepted
 * by the bot interface.
 *
 * @author <fredrik.christenson@gmail.com>
 */
var getHelpMessage = function() {

  var msg = 'Hi!,\n';

  msg += 'To tell me how you feel, ';
  msg += 'send me a message with one of the following words:\n';
  msg += stringToCodeString(constants.moods.join(', '));

  return msg;

};

module.exports.getHelpMessage = getHelpMessage;
