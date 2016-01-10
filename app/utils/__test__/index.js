'use strict';

var constants = require('../../config/constants.js');
var U         = require('../');
var assert    = require('assert');

describe('util tests', function() {

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

    it('should set isHelp to true if string start with "help"', function(done) {

      var str    = 'help';
      var result = U.stringToCommand(str);
      assert.ok(result.isHelp);
      done();

    });

    it('should set isHelp to false if string does not start with "help"', function(done) {

      var str    = 'foo help';
      var result = U.stringToCommand(str);
      assert.equal(result.isHelp, false);
      done();

    });

    it('should set isWrite to true if string start with a trigger', function(done) {

      constants.moods.forEach(function(mood) {

        var result = U.stringToCommand(mood);
        assert.ok(result.isWrite, true);

      });

      done();

    });

    it('should set isWrite to false if string does not start with a trigger', function(done) {

      var result = U.stringToCommand('foo');
      assert.equal(result.isWrite, false);
      done();

    });

  });

  describe('stringToCodeString', function() {

    it('should add "`" to the front and back of a string', function(done) {

      var str = 'foo';
      assert.equal('`foo`', U.stringToCodeString(str));
      done();

    });

  });

});
