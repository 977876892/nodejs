var express= require("express");
var app =express();
app.use(express.static(__dirname + "/../ExpressModule"));

app.get("/express",function(req,res){
    res.send("Welcome to Express Module");
});

app.get("/mysql",function(req,res){
    res.send("Welcome to MySQL DataBase...");
});

app.get("/mongodb",function(req,res){
    res.send("Welcome to MongoDB");
});

app.get("/",function(req,res){
    res.send("Default Output !");
});

app.listen(8080);
console.log("server listening the port number 8080");


// http://localhost:8080  --- Default Output !

// http://localhost:8080/express  --- Welcome to Express Module

// http://localhost:8080/mysql  --- Welcome to MySQL DataBase...

// http://localhost:8080/mongodb  --- Welcome to MongoDB