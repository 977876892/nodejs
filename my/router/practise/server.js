var express=require("express");
var mysql_con=require("./route/mysql");

var app=express();
app.use(express.static(__dirname+"/../router/practise"));
app.use("/mysql",mysql_con);

var mongo=require("./mongodb/mongo");
app.use("/mongodb",mongo)

app.listen(8080);
console.log("ruunn");