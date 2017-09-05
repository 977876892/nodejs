var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(express.static(__dirname+"/../POSTParameters"));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.post("/login",function(req,res){
    var response = {
        "uname" : req.body.uname,
        "upwd"  : req.body.upwd
    }

    res.send(response);
});

app.listen(8080);
console.log("Server Listening the Port No.8080")
