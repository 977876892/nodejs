var express = require("express");
var mongodb = require("mongodb");
var app = express();
app.use(express.static(__dirname+"/../DB"));

//create the MongoClient.
var nareshIT = mongodb.MongoClient;

var my_db;

//get request
app.get("/products",function(req,res){
    nareshIT.connect("mongodb://localhost:27017/my_db",function(err,db){  //mongodb://localhost:27017/DB_name
        my_db=db;
        if(err){
            console.log(err);
        }
        my_db.collection("product").find().toArray(function(err,array){
            res.send(array);
        });
    });
});


app.post("/insert",function(req,res){
    my_db.collection("product").insert({'p_id':4,'p_name':'Smart Mobile','p_cost':20000});
});

app.listen(8080);
console.log("Server Listening the Port No.8080");