var express=require("express");
var bodyparser=require("body-parser");
var app=express();
app.use(express.static(__dirname+"/../postparam"));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.post("/login",function(req,res){
    var responce={
   "uname":req.body.uname,
    "upwd":req.body.upwd
   }
   
   res.send(responce);
});
app.listen(8080);
console.log("runn");