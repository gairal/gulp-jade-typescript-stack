var conf = require('../config.json');
var options = require('./options');
var pkg = require('../../package.json');
var gulp = require('gulp');
var replace = require('gulp-replace');
var jshint = require('gulp-jshint');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('js:build', function() {
  'use strict';
  gulp.src([conf.base.src + conf.files.js])
    .pipe(jshint('./config/.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(conf.base.build));
});

gulp.task('ts:build', function() {
  'use strict';
  gulp.src([conf.base.src + conf.files.ts])
    .pipe(ts(tsProject))
    .pipe(gulp.dest(conf.base.build));
});
