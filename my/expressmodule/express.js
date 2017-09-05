var express_obj=require("express");
var app=express_obj();
app.use(express_obj.static(__dirname+"/../expressmodule"));
app.get("/",function(req,res){
    res.redirect("/express.html");
}).listen(8080);
