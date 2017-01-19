var express = require("express");
var router = express.Router();
var path = require('path');

var data = require('../data/tables');

router.get('/tables/all',function(req, res){
    // sends back data variable
});

router.post("/reserve/new", function(req, res){
	// parse info received from request into new object
    // push object to data
});

module.exports = router;