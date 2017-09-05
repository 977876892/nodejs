var express=require("express");
var route=express.Router();
var mongodb=require("mongodb");
var mongo_c=mongodb.MongoClient;
route.get("/emp",function(req,res){
    mongo_c.connect("mongodb://localhost:27017/my_db",function(err,db){
        db.collection("product").find().toArray(function(err,array){
            res.send(array);
        });
    });
});
module.exports=route;
