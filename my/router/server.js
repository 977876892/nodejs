var express=require("express");
var mysql_config=require("./route/mysql");
var mysql1_con=require("./route/mysql1");
var app=express();
app.use(express.static(__dirname+"/../router"));
app.use("/mysql",mysql_config);
app.use("/mysql1",mysql1_con);

var mongo_config=require("./route/mongo");
app.use("/mongos",mongo_config);
app.listen(8080);
console.log("runn");
 