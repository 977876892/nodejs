var express=require("express");
var mongodb=require("mongodb");
var mongoClient=mongodb.MongoClient;
var app=express();

app.use(express.static(__dirname+"/../mongoDB"));



app.get("/emp",function(req,res){
    mongoClient.connect("mongodb://localhost:27017/my_db",function(err,db){
         
         db.collection("product").find().toArray(function(array,err){
             res.send(array);
         });
        
        });
});
app.listen(8080);
console.log("runnnnnnnnn");