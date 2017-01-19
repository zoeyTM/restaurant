var express = require("express");
var router = express.Router();
var path = require('path'); 
var data = require('tables.js')

router.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/reservation.html"));
});

router.post("/reserve/new", function(req, res){
	
}

 module.exports = router;

