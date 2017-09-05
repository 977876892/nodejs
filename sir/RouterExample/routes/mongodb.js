var express = require("express");
var router = express.Router();
var mongodb = require("mongodb");
var nareshIT = mongodb.MongoClient;
router.get("/emp",function(req,res){
    nareshIT.connect("mongodb://localhost:27017/my_db",function(err,db){
        db.collection("product").find().toArray(function(err,array){
            res.send(array);
        });
    });
});

module.exports=router;