var express=require("express");
var mongodb=require("mongodb");
var route=express.Router();
var mogoclient=mongodb.MongoClient;
route.get("/emp",function(req,res){
     
    mogoclient.connect("mongodb://localhost:27017/my_db",function(err,db) {
         
        db.collection("product").find().toArray(function(err,array){
            res.send(array);
        });

    });
});
module.exports=route;