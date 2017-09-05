//import express
var express = require("express");

//create the server
var app = express();

//deploy the application
app.use(express.static(__dirname+"/../my"));


//http://localhost:8080/routing
app.get("/routing" , function(req,res,next){
    next();
},function(req,res){
    res.send({'message':"Welcome to Routing Example !"});
});



//http://localhost:8080/callback
//callback
var callback_one=function(req,res,next){
    next();
};
var callback_two=function(req,res,next){
    next();
};
var callback_three=function(req,res){
    res.send("hello world - 3");
};
app.get("/callback",[callback_one,callback_two,callback_three]);




app.listen(8080);
console.log("server listening the port no.8080")