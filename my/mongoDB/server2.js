var express=require("express");
var mongodb=require("mongodb");
var app=express();
app.use(express.static(__dirname+"/../mongoDB"));
var mongo_start=mongodb.MongoClient;

app.get("/get",function(req,res){
    mongo_start.connect("mongodb://localhost:27017/my_db",function(err,db){
        if(err){
            console.log(err);
        }
        db.collection("product").find().toArray(function(err,array){
            res.send(array);
        });
    });
});
app.get("/",function(req,res){
    res.redirect("/index.html"); 
});
app.listen(8080);
console.log("runnn");