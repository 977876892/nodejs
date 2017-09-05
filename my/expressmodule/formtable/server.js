var express=require("express");
var app=express();
app.use(express.static(__dirname+"/../formtable"));
app.get("/login",function(req,res){
    
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    if(uname=="admin" && upwd=="123"){
        console.log("login");
    }
    else{
        console.log("fail");
    }
}).listen(8080);
console.log("runn");