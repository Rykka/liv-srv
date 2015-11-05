var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");

var watch_list = require('gulp/config').watch_list

gulp.task('webpack', function(callback){
    gutil.log('[webpack]', 'Compile webpack')
    webpack({
        entry: './src/js/webpack/main.js',
        output: {
            path: './public/js',
            filename: 'webpack.js'
        }
    }, function(err, stats){
        if(err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({
        }))
        callback()
    })

})

watch_list.push([['src/js/webpack/**/*.js'], ['webpack']])
