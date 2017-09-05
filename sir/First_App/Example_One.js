//import http
var http = require("http");

//create the Server.
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("Welcome to NodeJS !!!");
    res.end();
}).listen(8080);

console.log("Server Listening the Port No.8080");