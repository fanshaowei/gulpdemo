var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var config = require('../config').style.css;

gulp.task('style', function() {
	console.log(config.src);
	return gulp.src(config.src)
		.pipe(minifyCss())
		.pipe(rev())
		.pipe(gulp.dest(config.dist))
		.pipe(rev.manifest())
		.pipe(gulp.dest(config.rev));
});