var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//static files to be served
app.use(express.static("public"));

// Routes
// =============================================================
var routes = require("./controllers/burger_controller.js");

app.use(routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});