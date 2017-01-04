var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build', ['sequence'], function() {
	console.log('build');

});

gulp.task('sequence', function(cb) {
	console.log('sequence');
	gulpSequence('clean', [
			'style',
			'script'
		],
		'rev', cb);
});