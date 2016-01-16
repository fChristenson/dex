'use strict';

var gulp     = require('gulp');
var exit     = require('gulp-exit');
var mocha    = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

gulp.task('test', function(cb) {

  gulp.src(['app/**/*.js', '!app/**/config/*.js', '!app/index.js', '!app/**/__test__/*', '!app/models/index.js'])
    .pipe(istanbul({includeUntested: true})) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function() {

      gulp.src(['app/**/__test__/index.js'])
        .pipe(mocha())
        .pipe(mocha({reporter: 'nyan'}))
        // Creating reports in coverage directory
        .pipe(istanbul.writeReports())
        // Enforce 100% coverage
        .pipe(istanbul.enforceThresholds({thresholds: {global: 100}}))
        .pipe(exit())
        .on('end', cb);

    });

});

