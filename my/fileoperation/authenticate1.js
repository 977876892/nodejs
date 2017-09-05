var http = require("http");
var url = require("url");
var app=http.createServer(function(req,res){
    var obj=url.parse(req.url,true).query;
    var uname=obj.uname;
    var upwd=obj.upwd;
    if(uname == "admin" && upwd == "123"){
        console.log("success");
    }
    else{
        console.log("fail");
    }
    res.end();
}).listen(8080);
console.log("runnnn");