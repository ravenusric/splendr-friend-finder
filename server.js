//  Your `server.js` file should require the basic npm packages we've used in class:
//  `express`, `body-parser` and `path`.

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
// var PORT = 3000;
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// JS Links to go on bottom 
app.get("/apiroutes.js", function(req, res) {
    res.sendFile(path.join(__dirname, "../routing/apiroutes.js"))
});

app.get("/htmlroutes.js",function(req,res) {
    res.sendFile(path.join(__dirname, "../routing/htmlroutes.js"))
});

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });