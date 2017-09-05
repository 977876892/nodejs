var http=require("http");
var url=require("url");
var obj=http.createServer(function(req,res){
    var data=url.parse(req.url,true).query;
    var uname=data.uname;
    var upwd=data.upwd;
    if(uname == "admin" && upwd == "admin"){
        console.log("login");
    }
    else{
        console.log("wrong");
        }
}).listen(8080);
console.log("runn");