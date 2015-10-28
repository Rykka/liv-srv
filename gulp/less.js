var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');

gulp.task('less', function () {

    console.log('Recompile less');
    
    // Specific less dir to avoid the 'less' dir in dest.
    return gulp.src('./src/css/less/**.less')
        .pipe(plumber())
        .pipe(less({
            paths: [ path.join(__dirname, '..', 'src', 'css', 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.watch('src/css/**/*.less', ['less'])
