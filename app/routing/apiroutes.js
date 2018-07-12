var path = require("path");
// Your `apiRoutes.js` file should contain two routes:
var friendArray = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
// Basic route that sends the user first to the AJAX Page
// Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
    
//   ===============================================================
// API Post
// ====================================================================

// Create New friends - takes in JSON input
  app.post("/api/friends", function(req, res) {
  console.log(req.body.scores);

  // Receive user details (name, photo, scores)
  var user = req.body;

  // parseInt for scores
  for(var i = 0; i < user.scores.length; i++) {
    user.scores[i] = parseInt(user.scores[i]);
  }

  // default friend match is the first friend but result will be whoever has the minimum difference in scores
  var specialFriendIndex = 0;
  var minDifference = 50;

  //  The difference is added to the total difference
    for(var i = 0; i < friends.length; i++) {
    var totalDifference = 0;
    for(var j = 0; j < friends[i].scores.length; j++) {
      var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
      totalDifference += difference;
    }

    if(totalDifference < minDifference) {
      specialFriendIndex = i;
      minDifference = totalDifference;
    }
  }

  // after finding match, add user to friend array
  friends.push(user);

  // send back to browser the best friend match
  res.json(friends[specialFriendIndex]);
});
};