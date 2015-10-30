var elem = document.querySelector('.browserify');
elem.style.display = 'block'
elem.style.backgroundColor = '#EBCEEB'

var elem2 = document.querySelector('.browserify2');
elem2.style.display = 'block'
elem2.style.backgroundColor = '#EBCEEB'

var stories = [{name:'1',body:'first'},{name:2,body:'second'}]



var _ = require('lodash');
// _.templateSettings.interpolate = /{{([\s\S]+?)}}/g; // XXX Change This can not parse '('
var render = _.template(require('tpl/test.tpl'));
elem.innerHTML = render({name:'browserify with lodash template engine',stories:stories});

var Handlebars = require('handlebars');
var template = Handlebars.compile(require('tpl/handlebars.tpl'));
elem2.innerHTML = template({name:'browserify with handlebars template engine', stories: stories});
