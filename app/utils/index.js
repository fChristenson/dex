'use strict';

var constants = require('../config/constants.js');
var R         = require('ramda');

/**
 * {a:b}->String c
 *
 * Converts an object with moods into a string.
 * @author <fredrik.christenson@gmail.com>
 */
var getMoodMessage = function(data) {

  var str = 'The mood in our team is:\n';

  str += '* happy: '   + data.happy + '\n';
  str += '* ok: '      + data.ok + '\n';
  str += '* unhappy: ' + data.unhappy;

  return str;

};

module.exports.getMoodMessage = getMoodMessage;

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

  str             = str.toLowerCase();
  var command     = {};
  var match       = new RegExp('^' + constants.MOODS.join('|')).exec(str);
  command.isHelp  = /^help/.test(str);
  command.mood    = match ? match[0] : undefined;
  command.isWrite = !!command.mood;
  command.isRead  = /^mood/.test(str);

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

  var msg = 'Hi!\n';

  msg += 'To tell me how you feel, ';
  msg += 'type one of the following words:\n';
  msg += stringToCodeString(constants.MOODS.join(', ')) + '\n';
  msg += 'To check the mood of our team type: ' + stringToCodeString('mood');

  return msg;

};

module.exports.getHelpMessage = getHelpMessage;
