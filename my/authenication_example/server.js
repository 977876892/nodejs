var express=require("express");
var jwt=require("jwt-simple");
var mongodb=require("mongodb");

var app=express(); // server 
app.use(express.static(__dirname+"/../authenication_example"));
app.get("/login/:uname/:upwd",function(req,res){
    var uname=req.params.uname;
    var upwd=req.params.upwd;

    if(uname == "admin" && upwd == "123"){
        var token=jwt.encode({"uname":uname},"1234");
        var obj=jwt.decode("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmFtZSI6ImFkbWluIn0.ZOfpsbqfoG7r93Qwfr6YH3TbBNULRo_rEwBuRDa22wg","1234");
        res.send(token+".........."+obj.uname);
    }
    else{
        res.send("wrong");
    }
});
app.listen(8080);
console.log("runnnnnnnnnnnnnnnnnnnnnnnnnnnn");