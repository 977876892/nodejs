//http://localhost:8080?uname=admin&upwd=admin
var http = require("http");
var my_obj = require("url");
http.createServer(function(req,res){
   var my_properties = my_obj.parse(req.url,true).query;

   console.log(my_properties.uname+"...."+my_properties.upwd);
}).listen(8080);
console.log("Server Listening the Port No.8080");

