'use strict';

var path = require('path');
var fs   = require('fs');

module.exports = function(emitter, model) {

    var files = fs.readdirSync(__dirname);

    files.forEach(function(file) {

        if (file !== 'index.js' && /\.js$/.test(file)) {

            require(path.join(__dirname, file))(emitter, model);

                    }

                    });

            };
