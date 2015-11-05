
define('myModule', ['./lib/jquery'], function($) {
    // $ is the export of the jquery module.
    $('.webpack1').removeClass('hide').html('hello')

});

var $ = require('./lib/jquery')

$('.webpack2').removeClass('hide').html('hello2')
