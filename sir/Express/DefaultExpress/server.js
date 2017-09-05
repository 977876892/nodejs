var express = require("express");
var app = express();
app.use(express.static(__dirname+"/../DefaultExpress"));
/*app.get("/",function(req,res){
    res.redirect("/index.html");
});*/
app.listen(8080);
console.log("Server Listening the Port No.8080");