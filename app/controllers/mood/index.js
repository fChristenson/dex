'use strict';

module.exports.getMood = function(req, res, next) {

  req.models.mood.save({test: 1}).then(function() {

    res.end('foo');

  });

};
