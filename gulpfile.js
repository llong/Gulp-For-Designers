/*
 Requirements
*/

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefix', function() {
  return gulp.src('css/styles.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('css'));
});
