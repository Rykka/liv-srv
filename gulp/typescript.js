var gulp = require('gulp');
var path = require('path');
var plumber = require('gulp-plumber');
var ts = require('gulp-typescript');

gulp.task('typescript', function() {

    console.log('Recompile typescript');

    return gulp.src('./src/js/typescript/*.ts')
        .pipe(plumber())
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest('./public/js'));
});

gulp.watch('src/js/**/*.ts', ['typescript'])
