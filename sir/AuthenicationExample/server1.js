var express=require("express");
var jwt=require("jwt-simple");
var app=express();
app.get("/login/:uname/:upwd",function(req,res){
    var uname=req.params.uname;
    var upwd=req.params.upwd;

    if(uname == "admin" && upwd == 123){
        var token=jwt.encode({"uname":uname},"1234");
        var token1=jwt.decode("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmFtZSI6ImFkbWluIn0.ZOfpsbqfoG7r93Qwfr6YH3TbBNULRo_rEwBuRDa22wg","1234");
        //res.send(token);
        res.send(token+"--"+token1.uname);
    }
});
app.listen(8080);
console.log("runnnnnnnn");