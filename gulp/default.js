var gulp = require('gulp');
var path = require('path');
var nodemon = require('nodemon');
var livereload = require('gulp-livereload');

var is_start = false ;

gulp.task('default',  function() {

    livereload.listen()

    nodemon({
        script: 'bin/www',
        ext : 'js',
        ignore: ['public/**','src/**'],
        env : {
            "NODE_ENV": "development",
            "PORT": "3333"
        },
    }).on('start', function() { // The start event will emit on every reload.
        if (!is_start) {
            console.log('Start server')
            is_start = true
        }
    }).on('restart', function() {
        // Emit reload after server started, 
        // so no CONNECTION-FAILED page will appear.
        setTimeout(function() {
            livereload.reload()
            console.log('Restart server')
        }, 500);
    })

});

