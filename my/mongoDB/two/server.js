var express=require("express");
var mongodb=require("mongodb");
var app=express();

var mongo_client=mongodb.MongoClient();

app.use(express.static(__dirname+"/../mongoDB/two"));

var my;
app.get("/emp",function(req,res){
    mongo_client.connect("mongodb://localhost:27017/my_db",function(err,db){
     my=db;
        if(err){
            console.log(err);
        }
        else{
            my.collection("product").find().toArray(function(err,array){
                res.send(array);
            });
        }
    });
});

app.post("/insert",function(req,res){
    my.collection("product").insert({"id":6,"name":"dash","age":33});
});
app.listen(8080);
console.log("runnnnnnnnnn");
