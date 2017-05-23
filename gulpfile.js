const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('build', () => {
	return gulp.src('./externs/**/*.js')
		.pipe(concat('externs.js'))
		.pipe(gulp.dest('./'));
});