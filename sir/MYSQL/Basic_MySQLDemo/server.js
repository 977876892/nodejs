//import express
var express = require("express");

//import mysql
var mysql = require("mysql");

//create server
var app = express();

//deploy
app.use(express.static(__dirname+"/../Basic_MySQLDemo"));



//connection object.
var connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"mini_project"
});


//connect to database.
connection.connect();


//get request
app.get("/emp",function(req,res){
    connection.query("select * from emp",function(err,records,fields){
        res.send(records);
    });
});

app.listen(8080);
console.log("Server Listening the Port No.8080");