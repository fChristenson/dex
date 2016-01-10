'use strict';

var BbPromise = require('bluebird');

module.exports = function(db) {

  var DAO = BbPromise.promisifyAll(db);

  return {

    save: function(data, label) {

      label = (data.id) ? undefined : label; // neo4j breaks if a label is provided during update
      return DAO.saveAsync(data, label);

    },
    find: function(predicate, label) {

      return DAO.findAsync(predicate, label);

    }

  };

};
