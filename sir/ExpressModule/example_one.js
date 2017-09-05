//import express module
var express = require("express");

//create the server
var app = express(); //where "app" behaves like server

//Deploy the Application
app.use(express.static(__dirname+"/../ExpressModule"));

//Default Output Of Server
app.get("/",function(req,res){
    res.redirect("/example_one.html")
});

//assign the port number
app.listen(8080);