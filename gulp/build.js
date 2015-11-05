var gulp = require('gulp')
var gutil = require("gulp-util");

var normalizedPath = require("path").join(__dirname, "tasks");


// // vanilla mover
// require('./tasks/copy')
//
// // css compiler
// require('./tasks/less')
// require('./tasks/sass')
//
// // js compiler
// require('./tasks/babel')
// require('./tasks/coffee')
// require('./tasks/typescript')
//
// // bundle with browserify
// require('./tasks/browserify')
// require('./tasks/webpack')


require("fs").readdirSync(normalizedPath).forEach(function(file) {
  require("./tasks/" + file);

    gulp.task('build', [
          'copy',
          'less',
          'sass',
          'coffee',
          'typescript',
          'babel',
          'browserify',
    ], function(){
        gutil.log('Build Task Finished.')
    })
});
