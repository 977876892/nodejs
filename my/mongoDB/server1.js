var express=require("express");
var mongodb=require("mongodb");
var app=express();

app.use(express.static(__dirname+"/../mongoDB"));
 // mongoclient
 var mongoclient=mongodb.MongoClient();
 var my_data;

 //get the data
 app.get("/emp",function(req,res){
     mongoclient.connect("mongodb://localhost:27017/my_db",function(err,db){
          my_data=db;
         if(err){
             throw err;
         }
         my_data.collection("product").find().toArray(function(err,array) {
             res.send(array)
         });
     });
 });


//insert data
app.post("/empp",function(req,res){
     mongoclient.connect("mongodb://localhost:27017/my_db",function(err,db){
          
         if(err){
             throw err;
         }
          db.collection("product").insert([{'id':6,'name':'kkkkk','age':65},{'id':5,'name':'ssssss','age':85}]);
     });
 });
 

 //delete collection
 app.delete("/empd",function(req,res){
      mongoclient.connect("mongodb://localhost:27017/my_db",function(err,db){
          
         if(err){
             throw err;
         }
         db.collection("product").remove({'id':1});
     });
     
 });

 app.listen(8080);
 console.log("runnnnnnnn");
