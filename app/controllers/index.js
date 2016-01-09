'use strict';

var path = require('path');
var fs   = require('fs');

function load() {

  var controllers = {};
  var controllerDirectories =  fs.readdirSync(__dirname);

  controllerDirectories.forEach(function(dir) {

    if (fs.statSync(path.join(__dirname, dir)).isDirectory()) {

      controllers[dir] = require(path.join(__dirname, dir));

    }

  });

  return controllers;

}

module.exports = load();
