var gulp = require('gulp');
var gutil = require("gulp-util");
var chalk = gutil.colors
var spawn = require('child_process').spawn
var p

gulp.task('default', function() {
    // The default task is merely a task manager
    console.log('======= Start ' + chalk.blue('Gulp')+' Task =======')

    p = spawn('gulp', ['watch'], {stdio:'inherit'})

    gulp.watch(['gulpfile.js', 'gulp/**/*.js'], ['gulp-reload']);

    process.on('exit', function(code) {
        gutil.log('======= Finish ' + chalk.blue('Gulp')+' Task=======')
    });

});

gulp.task('gulp-reload', function(){

    if (p && !p.killed) {
        gutil.log('kill ' + p.pid)
        p.kill()
    } else {
        gutil.log('already dead')
    }
    setTimeout(function() { 
        gutil.log('======= Start ' + chalk.blue('Watch')+' =======')
        p = spawn('gulp', ['watch'], {stdio:'inherit'})
    }, 20);

})
