var express = require("express");
var mongodb = require("mongodb");
var jwt = require("jwt-simple");
var app = express();

app.use(express.static(__dirname+"/../AuthenicationExample"));
app.get("/login/:uname/:upwd",function(req,res){
    var uname = req.params.uname;
    var upwd = req.params.upwd;

    if(uname=="admin" && upwd=="admin"){
        var token = jwt.encode({"uname":uname},"hr@tcs.com");
        var obj = jwt.decode("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmFtZSI6ImFkbWluIn0.47-XIs2GP8LyuBFlDuu7h2yxpeRf3kwpfBp7ONeF0Jw","hr@tcs.com");
        res.send(token+"..."+obj.uname);    
    }
});

app.listen(8080);
console.log("Server Listening the Port No.8080");