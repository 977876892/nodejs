var express=require("express");
var route=express.Router();
var mongodb=require("mongodb");
var mongo_cli=mongodb.MongoClient;

route.get("/mongo",function(req,res){
    mongo_cli.connect("mongodb://localhost:27017/my_db",function(err,db){
        db.collection("product").find().toArray(function(array,err){
            res.send(array);
        });
    });
});


module.exports=route;