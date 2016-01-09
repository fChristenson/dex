'use strict';

var assert    = require('assert');
var constants = require('../../config/constants.js');
var Model     = require('../');
var db        = require('seraph')({

  server: constants.DB_URI,
  user: constants.DB_USER,
  pass: constants.DB_PASSWORD

});

var model = new Model(db);

describe('model test', function() {

  describe('save', function() {

    it('should save data', function(done) {

      model.save({foo: 1})
                .then(function(data) {

                  assert.equal(data.foo, 1);
                  done();

                });

    });

  });

});
