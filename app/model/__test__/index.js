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

  describe('find', function() {

    it('should find data', function(done) {

      model.find({foo: 1}, 'bar')
              .then(function(result) {

                assert.ok(result);
                assert.equal(result.length, 0);
                done();

              });

    });

  });

});
