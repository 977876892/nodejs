var http=require("http");
var obj=require("./my_module");
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(obj.my_fun());
    res.end();
}).listen(8080);
console.log("server is running");