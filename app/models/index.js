'use strict';

var path = require('path');
var fs   = require('fs');

function load(db) {

  var modulesDirectories =  fs.readdirSync(__dirname);
  var modules = {};
  var module;
  var model;

  modulesDirectories.forEach(function(dir) {

    if (fs.statSync(path.join(__dirname, dir)).isDirectory()) {

      module = require(path.join(__dirname, dir));
      model = module(db);
      modules[dir] = model;

    }

  });

  return modules;

}

module.exports = load;
