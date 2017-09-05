var express=require("express");
var mongo=require("mongodb");
var app=express();
app.use(express.static(__dirname+"/../mongoDB"));

//create the MongoClient.
var mongo_start=mongo.MongoClient;
var my_db;
app.get("/product",function(req,res){
    mongo_start.connect("mongodb://localhost:27017/my_db",function(err,db){
        my_db=db;
        if(err){console.log(err);}
        my_db.collection("product").find().toArray(function(array,err){
            res.send(array);
        });
    });
});
app.get("/",function(req,res){
    res.redirect("/angular.html"); 
});
app.listen(8080);
console.log("runn");