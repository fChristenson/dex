'use strict';

var BbPromise = require('bluebird');

module.exports = function(db) {

  var DAO = BbPromise.promisifyAll(db);

  return {

    save: function(data, label) {

      return DAO.saveAsync(data, label);

    }

  };

};
