'use strict';

var constants = require('../config/constants.js');
var R         = require('ramda');

/**
 * _->Number a
 *
 * Returns a UTC number representing the number of milliseconds
 * from 1970-01-01 to today.
 *
 * @author <fredrik.christenson@gmail.com>
 */
var todayAsMilliseconds = function() {

  var date = new Date().toISOString(); // 2016-01-10T07:04:15.369Z
  var array = date.split('T'); // [2016-01-10, 07:04:15.369Z]
  array = array[0].split('-'); // [2016, 01, 10]

  return Date.UTC.apply(null, array);

};

module.exports.todayAsMilliseconds = todayAsMilliseconds;

/**
 * a->b->_
 *
 * Logs a label and a value to console.
 *
 * @author <fredrik.christenson@gmail.com>
 */
var log = R.curry(function(label, val) {

  console.log(label, val);
  return val;

});

module.exports.log = log;

/**
 * String a->{a:b}
 *
 * Converts a command string to an object
 * with props.
 *
 * @author <fredrik.christenson@gmail.com>
 */
var stringToCommand = function(str) {

  var command     = {};
  var match       = new RegExp('^' + constants.moods.join('|')).exec(str);
  command.isHelp  = /^help/.test(str);
  command.mood    = match ? match[0] : undefined;
  command.isWrite = !!command.mood;

  return command;

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
