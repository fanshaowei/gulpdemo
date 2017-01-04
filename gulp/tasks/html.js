var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpif = require('gulp-if')
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var config = require('../config').html;

gulp.task('html', ['rev'], function() {
	console.log('html');
	return gulp.src(config.src)
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', minifyCss()))
		.pipe(gulp.dest(config.dist))
});