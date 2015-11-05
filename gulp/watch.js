var gulp = require('gulp')
var gutil = require("gulp-util");
var watch_list = require('gulp/config').watch_list
var chalk = gutil.colors

var path = require('path')
var rel = require('path').relative

var nodemon = require('nodemon');
var lr = require('./lib/lr')
var config = require('config')

var is_start = false ;

gulp.task('watch', function(){

    gulp.watch('views/**.html', function(file){
        gutil.log('html ' + chalk.yellow(file.path) + ' changed')
        lr.reload(rel(config.public_dir, file.path))
    })

    gulp.watch('public/**/*.js', function(file){
        gutil.log('js ' + chalk.yellow(file.path) + ' changed')
        lr.reload(rel(config.public_dir, file.path))
    })

    gulp.watch('public/**/*.css', function(file){
        gutil.log('css ' + chalk.yellow(file.path) + ' changed')
        lr.reload(rel(config.public_dir, file.path))
    })

    for (var i=0; i < watch_list.length; ++i) {
        gulp.watch(watch_list[i][0], watch_list[i][1])
    }
    
    // Start nodemon server 
    nodemon({
        script: 'bin/www',
        ext : 'js',
        ignore: ['gulp/**/*.js','public/**/*.*','src/**/*.*'],
        env : {
            "NODE_ENV": "development",
            "PORT": "3333"
        },
    }).on('start', function() { // The start event will emit on every reload.
        if (!is_start) {
            gutil.log(chalk.green('Start server'))
            is_start = true
            // NOTE: We start the server here only,
            // and reload on our demands!
            lr.listen()
        }
    }).on('restart', function() {
        // Emit reload after server started, 
        // so no CONNECTION-FAILED page will appear.
        gutil.log(chalk.green('Restart server'))
        lr.reload()
    })


    
    process.on('exit', function(code) {
        gutil.log('======= Finish ' + chalk.blue('Watch')+' =======')
    });
})

