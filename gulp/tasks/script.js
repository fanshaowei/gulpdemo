var gulp = require('gulp');
var config = require('../config').script;
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');

gulp.task('script', function() {
	console.log('script');
	return gulp.src(config.src)
		.pipe(jshint())
		.pipe(uglify())
		.pipe(rev())
		.pipe(gulp.dest(config.dist))
		.pipe(rev.manifest())
		.pipe(gulp.dest(config.rev));
});