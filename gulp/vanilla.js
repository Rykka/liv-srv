var gulp = require('gulp');
var plumber = require('gulp-plumber');

gulp.task('vanilla', function() {
    console.log('Recompile vanilla');
    gulp.src('./src/js/vanilla/**.js')
        .pipe(plumber())
        .pipe(gulp.dest('./public/js'))
});


gulp.task('vanilla-css', function() {
    console.log('Recompile vanilla-css');
    gulp.src('./src/css/vanilla/**.css')
        .pipe(plumber())
        .pipe(gulp.dest('./public/css'))
});

gulp.watch('src/js/vanilla/**.js', ['vanilla'])
gulp.watch('src/css/vanilla/**.css', ['vanilla-css'])
