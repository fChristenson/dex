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
    count: function(equalities, label) {

      equalities = R.uniq(equalities); // remove duplicate equality objects
      // We start by making a string like match (a:mood)
      var query = 'match (a:' + label + ') ';

      query += 'return '; // We add return and now have match (a:mood) return
      query += equalities.reduce(function(str, eq) {

        // We get this first key of every object
        var key = Object.keys(eq)[0];

        // We create a string like count(a.prop = 'foo') as foo
        str += 'count(a.' + key + ' = \'' + eq[key] + '\') as ' + eq[key];

        // If we are not on the last object we add ", " to the end
        if (eq !== R.last(equalities)) {

          str += ', ';

        }

        return str;

      }, '');

      /*
       * We should now have a string that looks like,
       * match (a:mood) return count(a.prop = 'foo') as foo
       *
       * Finally we run the query and return the first item
       * in the returned array.
       */
      return DAO.queryAsync(query).then(R.head);

    }

  };

};
