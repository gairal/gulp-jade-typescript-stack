var conf = require('../config.json');
var pkg = require('../../package.json');
var gulp = require('gulp');
var puglint = require('gulp-pug-lint');
var pug = require('gulp-pug');
var inject = require('gulp-inject');

gulp.task('pug:build', function() {
  'use strict';
  var myLocals = {
    'appName': pkg.name
  };

  gulp.src([conf.base.src + conf.files.pug])
    .pipe(puglint())
    .pipe(pug({
      locals: myLocals,
      pretty: true
    }))
    .pipe(inject(gulp.src(conf.vendor.js, {read: false}), {addRootSlash: false}))
    .pipe(gulp.dest(conf.base.build));
});
