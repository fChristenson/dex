'use strict';

var assert = require('assert');
var U      = require('../');

describe('mood util test', function() {

    describe('getHelpMessage', function() {

        it('should return a string', function(done) {

            var result = U.getHelpMessage();
            assert.ok(typeof result === 'string');
            done();

        });

    });

    describe('stringToCommand', function() {

        it('should return a command object', function(done) {

            var result = U.stringToCommand('foo');
            assert.ok(typeof result === 'object');
            done();

        });

    });

});
