var express = require('express');
var router = express.Router();
var path = require('path');
var data = require('./app/data/tables');

router.get('/tables', function(req, res){
	res.sendFile(path.join(__dirname, "../public/tables.html"));
})
router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, "../public/home.html"));
}) 

router.get('/tables/all',function(req, res){
	res.sendFile(res.)
})

mudule.exports = router;