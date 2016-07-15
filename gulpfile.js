	var gulp = require('gulp');
	var browserSync = require('browser-sync');
	var concat = require('gulp-concat');
	

	gulp.task('default', function() {
		console.log("is this the real life?")
	});

	gulp.task('rhapsody',['default'], function(){
		console.log('is this just fantasy?');
	});

	gulp.task('landslide', ['rhapsody'], function() {
		console.log('caught in a landslide');
	});

	gulp.task('browser-sync', function() {
		browserSync.init({
			server: {
				baseDir: "./"
			}
		});
		gulp.watch('./*.html').on('change', browserSync.reload);
		gulp.watch('./css/*.css').on('change', browserSync.reload);
		gulp.watch('./js/*.js').on('change', browserSync.reload);
	})

	gulp.task('concatScripts',function() {
		gulp.src(['a.js','b.js','c.js','d.js'])
		.pipe(concat("app.js"))
		.pipe(gulp.dest('js'));
	});