var express=require("express");
var mongodb = require("mongodb");
var jwt=require("jwt-simple");
var app=express();

app.use(express.static(__dirname+"/../authenication_example"));
app.get("login/:uname/:upwd",function(req,res){
     var uname=req.params.uname;
     var upwd=req.params.upwd;
     if(uname == "admin" && upwd == "123"){
         var token=jwt.encode({"uname":uname},"123");
         res.send(token);
     }
     
});
app.listen(8080);
console.log("runnnnnnnnn");