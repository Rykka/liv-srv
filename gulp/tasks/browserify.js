// browserify bundler
var browserify = require('browserify')
var gulp = require('gulp')
var gutil = require("gulp-util");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var glob = require('glob');
var es = require('event-stream');
var path = require('path')



var stringify = require('stringify');
var watch_list = require('gulp/config').watch_list

gulp.task('browserify', function(done){

    gutil.log('Bundle Browserify')

    // NOTE: ONLY Bundle the first dir of file.
    glob('./src/bundle/browserify/*.js', function(err, files){

        if (err) done(err);

        var tasks = files.map(function(entry) {
            return browserify({paths:['./src/bundle/browserify', './bower_components']})
                .transform(stringify(['.html', '.tpl']))
                .transform("babelify", {presets: ["es2015", "react"]})
                .add(entry)
                .bundle()
                .on('error', function(err){
                    gutil.log(err.message);
                    // end this stream
                    this.emit('end');
                })
                .pipe(source(path.basename(entry)))
                .pipe(gulp.dest('./public/js'));
            });
        es.merge(tasks).on('end', done);

    })


    // var b = browserify({paths:['./src/js/browserify']})
    // b.transform(stringify(['.html', '.tpl']))
    //  .add('./src/js/browserify/main.js')
    //  .bundle()
    //  .on('error', function(err){
    //     // print the error (can replace with gulp-util)
    //     console.log(err.message);
    //     // end this stream
    //     this.emit('end');
    //  })
    //  .pipe(source('main.js'))      // we should give a file name here.
    //  .pipe(gulp.dest('./public/js'))
    //
    // var b = browserify({paths:['./src/js/browserify']})
    // b.transform(stringify(['.html', '.tpl']))
    //  .add('./src/js/browserify/worker.js')
    //  .bundle()
    //  .on('error', function(err){
    //     // print the error (can replace with gulp-util)
    //     console.log(err.message);
    //     // end this stream
    //     this.emit('end');
    //  })
    //  .pipe(source('worker.js'))      // we should give a file name here.
    //  .pipe(gulp.dest('./public/js'))
})

watch_list.push([['src/bundle/browserify/**/*.js', 'src/bundle/browserify/**/*.tpl'], ['browserify']])
