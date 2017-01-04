var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require("browser-sync").create();

var reload = browserSync.reload;
var config = require('../config').watch;

gulp.task('watch', ['browserSync'], function() {
	console.log(config.js);

	gulp.watch(config.js, ['js']);
	gulp.watch(config.style, ['style']);
});