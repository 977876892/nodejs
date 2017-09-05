var express=require("express");
var jwt=require("jwt-simple");

 
var app=express();
app.use(express.static(__dirname+"/../authenication_example"));

app.get("/",function(req,res){
    res.redirect("/index.html");
});
app.get("/emp",function(req,res){
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    console.log(uname);
    if(uname == "admin" && upwd == "123"){
    var token=jwt.encode({"uname":uname},"1234");
    var obj=jwt.decode("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmFtZSI6ImFkbWluIn0.ZOfpsbqfoG7r93Qwfr6YH3TbBNULRo_rEwBuRDa22wg","1234");

    res.send(token+'.......'+obj.uname);
    }
});
app.listen(8080);
console.log('runnnnnnnnn');