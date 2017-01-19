var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/tables', function(req, res){
	res.sendFile(path.join(__dirname, "../public/tables.html"));
});

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/reserve", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/reservation.html"));
});

module.exports = router;