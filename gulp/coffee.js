var coffee = require('gulp-coffee');
var gulp = require('gulp');
var plumber = require('gulp-plumber');

gulp.task('coffee', function() {
    console.log('Recompile coffee');
    gulp.src('./src/js/coffee/**.coffee')
        .pipe(plumber())
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest('./public/js'))
});

gulp.watch('src/js/coffee/**.coffee', ['coffee'])
