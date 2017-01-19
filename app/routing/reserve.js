var express = require("express");
var router = express.router();
var path = require('path'); 


router.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/reservation.html"));
});

 module.exports = router;

