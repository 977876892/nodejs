//http://localhost:8080?uname=admin&upwd=admin
var http=require("http");
 
var url=require("url");

var app=http.createServer(function(req,res){
 
    var read=url.parse(req.url,true).query;
    var uname=read.uname;
    var upwd=read.upwd;
    if(uname=="admin" && upwd=="admin"){
       res.write("Login Success !");
    }
    else{
        res.write("Login unsuccess !");
    }
    res.end();
});
app.listen(8080);
console.log("server");
