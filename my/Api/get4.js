var express=require("express");
var Client=require("node-rest-client").Client;
var app=express();

var newClient=new Client();


app.get("/emp",function(req,res){
   newClient.get("http://dashboard.getion.in/index.php?option=com_api&format=raw&app=easyblog&resource=latest&key=178b5f7f049b32a8fc34d9116099cd706b7f9631&user_id=65&from=2017-03-14 12:22:26&limitstart=0&limit=10",function(data,res){
       console.log(res);
   });
});
app.listen(8080);
console.log("run");