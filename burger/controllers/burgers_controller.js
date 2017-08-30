var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req, res) {
    res.redirect('/burger')
});

router.get('/burger', function(req, res) {
    burgers.all(function(data) {
        var hbsObject = { burgers: data };

        console.log(hbsObject);

        res.render('index', hbsObject);
    });
});

router.post('/burger/create', function(req, res) {
    burger.create(['burger_name'], [req.body.burger_name], function(data) {
        res.redirect('/burger')
    });
});

router.put('/burger/update/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition ', condition);

    burgers.update({ 'devoured': req.body.devoured }, condition, function(data) {
        res.redirect('/burger');
    });
});

module.exports = router;