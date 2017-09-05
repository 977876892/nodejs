var express=require("express");
var mysql_config=require("./route/mysql3");
var my_mongo=require("./route/mongo1");

var app=express();
app.use(express.static(__dirname+"/../router"));
app.use("/mysql",mysql_config);

app.use("/mongo",my_mongo);
app.listen(8080);
console.log("connect");
