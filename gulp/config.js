var src = './src/';
var dist = './dist/';

module.exports = {
	browserSync: {
		server: {
			baseDir: 'src',
			index: 'toupiao.html'
		},
		files: [
			src + 'js/**/*.js',
			src + 'sylte/**/*.css',
			src + '**/*.html'
		]
	},
	script: {
		src: src + 'js/**/*.js',
		dist: dist + 'js/',
		rev: src + 'rev/js/'
	},
	style: {
		css: {
			src: src + 'style/**/*.css',
			dist: dist + 'style/',
			rev: src + 'rev/style/'
		}
	},
	html: {
		src: src + '**/*.html',
		dist: dist
	},
	watch: {
		js: src + 'js/**/*.js',
		style: src + 'style/**/*.css',
		html: src + '**/*.html'
	},
	rev: {
		src: src + 'rev/',
		dist: dist,
		json: src + 'rev/**/*.json',
		html: src + '**/*.html'
	},
	clean: {
		src: dist
	}
}