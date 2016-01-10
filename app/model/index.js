'use strict';

var R         = require('ramda');
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

    },
    count: function(obj, label) {

      var key   = Object.keys(obj)[0];
      var query = 'match (a:' + label + ') ';

      query += 'where a.' + key + ' = \'' + obj[key] + '\'';
      query += ' return count(a) as ' + obj[key];

      // match (a:label) where a.prop = val return count(a) as val
      return DAO.queryAsync(query).then(R.head);

    }

  };

};
