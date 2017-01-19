var PORT = 8080;
var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root", 
    password: "youknow", 
    database: "restaurant"
});

connection.connect(function(err) {
    if (err) {
        console.error('Database Connection Failed');
        throw err;
    }
    console.log("Connected as id " + connection.threadId);
    start();
});

var start = function(){

    connection.query('SELECT * FROM restaurant.reservations', function(err, res) {
        console.log("Hello");
        console.log(res);

    });

};


app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/tables.html"));
});

app.get("/tables/all", function(req, res){
    connection.query("SELECT * FROM tables", function(err, qres){
        if(err){ 
            throw err;
            console.log(err);
        }
        console.log(qres);
    });
    res.send("hello");
});

app.listen(PORT, function(){
    console.log("App listening");
});
