var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

// add a '/' endpoint that redirects to the /index route
router.get('/', function(req, res) {
	res.redirect('/index');
});

// add a '/index/' endpoint that gets all the burgers
// then renders the index file by passing in all the burgers
// as an object for handlebars to use
router.get('/index', function(req, res) {
	burger.all(function(data) {
		var hbsObject = {burger: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// add a '/burgers/create' endpoint that posts the 
// burger name the user entered then as a callback it
// redirects back to the /index route
router.post('/burger/create', function(req, res) {
	burger.create(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});

// add a '/burgers/update/:id' route that updates
// the status of the burger from being uneaten to eaten
// then does a callback that redirects to the /index endpoint
router.put('/burger/update/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.update({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
});

// export the router (controller) back to the server
module.exports = router;