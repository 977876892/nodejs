//import express
var express = require("express");

//create the server
var app = express();

//deploy the application
app.use(express.static(__dirname+"/../APIExample"));


//http://localhost:8080/routing
app.get("/routing" , function(req,res){
    res.send({'message':"Welcome to Routing Example !"});
});

//http://localhost:8080/mysql
app.get("/mysql",function(req,res){
    res.send("Data from Mysql db with connection pooling mechanism soon...");
});

//http://localhost:8080/mydd55sql
app.get("/my*sql",function(req,res){ //we can replace the "*" with any other character
    res.send("Data from Mysql db with connection pooling mechanism soon...");
});

//http://localhost:8080/abcd
app.get("/ab?cd",function(req,res){ //we can replace the "?" with either "b" or "c" or "bc"
    res.send("Data from Mysql db with connection pooling mechanism soon...");
});

app.all("/xyz",function(req,res){ //app.all will handle all type of request
    res.send("Data from Mysql db with connection pooling mechanism soon...");
});

//http://localhost:8080/mongodb
app.get("/mongodb",function(req,res){
    res.send("Data from MongoDB soon...");
});

app.listen(8080);
console.log("server listening the port no.8080")

