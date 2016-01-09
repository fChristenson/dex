'use strict';

var constants = require('../../config/constants.js');
var BbPromise = require('bluebird');
var label = constants.strings.MOOD;

module.exports = function(db) {

  var DAO = BbPromise.promisifyAll(db);

  return {

    save: function(mood) {

      return DAO.saveAsync(mood, label);

    },
    getMoods: function() {

      return DAO.nodesWithLabelAsync(label);

    }

  };

};
