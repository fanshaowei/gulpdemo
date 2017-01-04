var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config').clean;
//清空文件夹，避免资源冗余
gulp.task('clean', function() {
	console.log(config.src);

	return gulp.src(config.src, {
		read: false
	}).pipe(clean());
});