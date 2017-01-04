var gulp = require('gulp');
// require 加载 browser-sync 模块
var browserSync = require('browser-sync').create();
var browserSyncConfig = require('../config').browserSync;
var watchConfig = require('../config').watch;

gulp.task('browserSync', ['build'], function() {
	console.log('browserSync');
	browserSync.init(browserSyncConfig);
});