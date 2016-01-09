'use strict';

module.exports.getMood = function(req, res, next) {

  return req.models.mood.save({test: 1})
        .then(function(mood) {

          res.json(mood);

        });

};

module.exports.getMoods = function(req, res, next) {

  return req.models.mood.getMoods()
        .then(function(moods) {

          res.json(moods);

        });
};
