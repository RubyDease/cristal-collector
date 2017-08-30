var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override')

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var route = require("./controllers/burgers_controller.js");
app.use("/", route);


app.listen(port);