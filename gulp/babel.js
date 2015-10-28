var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');

var src = ['src/js/babel/**.js', 'src/js/babel/**.jsx']
 
gulp.task('babel', function (d, e) {
    console.log('Recompile babel (es6 & react)')
    return gulp.src(src)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('public/js'));
});

gulp.watch(src, ['babel'])

