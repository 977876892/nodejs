var express=require("express");
var app=express();
var myexport=require("./route/mongodb");
app.use(express.static(__dirname+"/../route"));
app.use("/mymongo",myexport);



app.listen(8080);
console.log("Server Listening the Port No.8080");