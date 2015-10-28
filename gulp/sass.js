var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var plumber = require('gulp-plumber');

gulp.task('sass', function () {

  console.log('Recompile sass');


  return gulp.src(['./src/css/sass/**.sass', './src//css/sass/**.scss'])
    .pipe(plumber())
    .pipe(sass({
        paths: [ path.join(__dirname, 'sass', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.watch(['src/css/**/*.sass', 'src/css/**/*.scss'], ['sass'])
