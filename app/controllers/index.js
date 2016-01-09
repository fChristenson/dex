'use strict';

var path = require('path');
var fs   = require('fs');

function load() {

  var modules = {};
  var modulesDirectories =  fs.readdirSync(__dirname);

  modulesDirectories.forEach(function(dir) {

    if (fs.statSync(path.join(__dirname, dir)).isDirectory()) {

      modules[dir] = require(path.join(__dirname, dir));

    }

  });

  return modules;

}

module.exports = load();
