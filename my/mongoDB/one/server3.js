var express=require("express");
var mongodb=require("mongodb");
var mongoClient=mongodb.MongoClient;
var app=express();

app.use(express.static(__dirname+"/../one"));



app.get("/emp",function(req,res){
    mongoClient.connect("mongodb://localhost:27017/my_db",function(err,db){
         var my_database=db;
         my_database.collection("product").find().toArray(function(array,err){
             res.send(array);
         });
        
        });
});
app.listen(8080);
console.log("runnnnnnnnn");