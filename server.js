var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = 8000;

var reserve = require('./app/routing/reserve');
var tables = require('./app/routing/tables');

// app.use(reserve);
app.use(tables);

app.listen(PORT, function () {
	console.log('Server listening on port:', PORT);
});