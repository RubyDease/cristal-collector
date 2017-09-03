var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// set port to 3000 
var PORT = process.env.PORT || 3000;

// Create an instance of the express app.
var app = express();


app.use(express.static(__dirname + '/public'));

/// bodyparsers 
app.use(bodyParser.urlencoded({ extended: true }));

// override with POST having ?_method=DELETE or PUT
app.use(methodOverride('_method'));

// Set Handlebars as the default templating engine.
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// now import the routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Initiate the listener.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});