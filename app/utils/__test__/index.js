'use strict';

var constants = require('../../config/constants.js');
var U         = require('../');
var assert    = require('assert');

describe('util tests', function() {

  describe('stringToCodeString', function() {

    it('should add "`" to the front and back of a string', function(done) {

      var str = 'foo';
      assert.equal('`foo`', U.stringToCodeString(str));
      done();

    });

  });

});
