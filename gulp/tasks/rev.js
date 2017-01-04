var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpif = require('gulp-if')
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var revCollector = require('gulp-rev-collector');
var config = require('../config').rev;

gulp.task('rev', function() {
	console.log('rev');
	return gulp.src([config.json, config.html])
		.pipe(revCollector({
			replaceReved: true
		}))
		.pipe(gulp.dest(config.dist));
});