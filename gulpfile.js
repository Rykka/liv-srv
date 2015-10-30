var path = require('path');
process.env.NODE_PATH = path.join(__dirname )
require('module').Module._initPaths();

// vanilla mover
require('gulp/vanilla')
require('gulp/html')

// css compiler
require('gulp/less')
require('gulp/sass')

// js compiler
require('gulp/babel')
require('gulp/coffee')
require('gulp/typescript')

// bundle with browserify
require('gulp/browserify')

// the gulp default task
require('gulp/default')
