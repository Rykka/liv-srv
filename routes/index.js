var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Hlelo'})
}); 
router.get('/nav', function(req, res, next) {
    res.send('this is a test')
});

module.exports = router;
