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

