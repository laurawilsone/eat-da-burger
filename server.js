var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false}));

//method override
app.use(methodOverride("_methos"));

var exph = require("express-handlebars");

app.engine("handlebars", exph({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });