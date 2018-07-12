// Your `htmlRoutes.js` file should include two routes:
var path = require("path");

module.exports = function(app) {
// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page. 
// Basic route that sends the user first to the AJAX Page
  
  // Home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};