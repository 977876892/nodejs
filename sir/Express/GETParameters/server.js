var express = require("express");

var app = express();


app.use(express.static(__dirname+"/../GETParameters"));

app.get("/login",function(req,res){
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    if(uname=="admin" && upwd=="admin"){
        console.log("Login Success !");
    }else{
        console.log("Login Fail !");
    }
});

app.listen(8080);
console.log("Server Listening the Port No.8080");