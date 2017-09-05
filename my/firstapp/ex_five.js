var http=require("http");
var myurl=require("url");
http.createServer(function(req,res){
    var my=myurl.parse(req.url,true).query;
    console.log(my);
}).listen(8080);
console.log("runn");

