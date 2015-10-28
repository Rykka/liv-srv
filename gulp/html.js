var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.watch('views/**.html', function(){
    console.log('Reload html')
    livereload.reload()
})

gulp.watch('public/**/*.js', function(){
    console.log('Reload js')
    livereload.reload()
})

gulp.watch('public/**/*.css', function(){
    console.log('Reload css')
    livereload.reload()
})
