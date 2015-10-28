var path = require('path');
process.env.NODE_PATH = path.join(__dirname )
require('module').Module._initPaths();

require('gulp/less')
require('gulp/sass')

require('gulp/babel')
require('gulp/coffee')
require('gulp/typescript')
require('gulp/vanilla')

require('gulp/html')
require('gulp/default')

