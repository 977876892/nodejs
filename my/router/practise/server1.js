var express=require("express");
var mysql_route=require("./route/mysql1");
var app=express();
app.use(express.static(__dirname+'/../router/practise'));
app.use("/mysql",mysql_route);
app.listen(8080);
console.log("Server Listening the Port No.8080");
