/* Browserify  Require and Template demo
 */
var elem = document.querySelector('.browserify1');
elem.style.display = 'block'

var elem2 = document.querySelector('.browserify2');
elem2.style.display = 'block'

var elem3 = document.querySelector('.browserify3');
elem3.style.display = 'block'

var elem4 = document.querySelector('.browserify4');
elem4.style.display = 'block'

var stories = [{name:'1',body:'first'},{name:2,body:'second'}]

var _ = require('lodash');
// _.templateSettings.interpolate = /{{([\s\S]+?)}}/g; // XXX Change This can not parse '('
var lo_tpl, lo_html
lo_tpl = _.template(require('tpl/lodash.tpl'));
lo_html = lo_tpl({name:'browserify:lodash template',stories:stories});
elem.innerHTML = lo_html

var Handlebars = require('handlebars');
var ha_tpl, ha_html
ha_tpl = Handlebars.compile(require('tpl/handlebars.tpl'));
ha_html = ha_tpl({name:'browserify:handlebars template', stories: stories});
elem2.innerHTML = ha_html

var art = require('art-template');
var ar_tpl, ar_html
ar_tpl = art.compile(require('tpl/art_template.tpl'));
ar_html = ar_tpl({name:'browserify:art_template', stories: stories});
elem3.innerHTML = ar_html

var swig = require('swig');
var sw_tpl, sw_html
sw_tpl = swig.compile(require('tpl/swig.tpl'));
sw_html = sw_tpl({name:'browserify:swig template', stories: stories});
elem4.innerHTML = sw_html

var $ = require('../webpack/lib/jquery')

if (window.Worker) {
    var myWorker = new Worker("js/worker2.js");
    myWorker.onmessage = function(e){
        if (typeof e.data == 'object') {
            $('.' + e.data.name + ' div').append('<span class="log">' + e.data.time + 'ms :' + e.data.num + ' times</span>')
        } else {
            console.log(e.data)
        }
    }
}
require('./react')

