// browserify bundler
var browserify = require('browserify')
var gulp = require('gulp')
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var stringify = require('stringify');

gulp.task('browserify', function(){
    var b = browserify({paths:['./src/js/browserify']})
    b.transform(stringify(['.html', '.tpl']))
     .add('./src/js/browserify/main.js')
     .bundle()
    .on('error', function(err){
        // print the error (can replace with gulp-util)
        console.log(err.message);
        // end this stream
        this.emit('end');
    })
     .pipe(source('main.js'))      // we should give a file name here.
     .pipe(gulp.dest('./public/js'))
})

gulp.watch(['src/js/browserify/**/*.js', 'src/js/browserify/**/*.tpl'], ['browserify'])
