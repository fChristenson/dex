'use strict';

var gulp     = require('gulp');
var jscs     = require('gulp-jscs');
var jshint   = require('gulp-jshint');
var exit     = require('gulp-exit');
var mocha    = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

gulp.task('test', ['jscs', 'jshint'], function(cb) {

  gulp.src(['app/**/*.js', '!app/config/*.js'])
    .pipe(istanbul({includeUntested: true})) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function() {

      gulp.src(['test/**/*Test.js'])
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

gulp.task('jshint', function() {

  return gulp.src(['app/**/*.js', 'test/**/*.js', 'server.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(jshint.reporter('fail'));

});

gulp.task('jscs', function() {

  return gulp.src(['app/**/*.js', 'test/**/*.js', 'server.js'])
  .pipe(jscs());

});
