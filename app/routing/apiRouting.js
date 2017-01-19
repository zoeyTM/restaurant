var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

var data = require('../data/tables');

router.use(bodyParser.json());

router.get('/tables/all',function(req, res){
    // sends back data variable
	res.json(data);
});

router.post("/reserve/new", function(req, res){
	// parse info received from request into new object
    // push object to data
	var body = JSON.parse(req.body);
	res.json(body.name);
});

module.exports = router;