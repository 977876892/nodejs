var http = require("http");
http.createServer(function(req,res){
    //set the html as the MIME Type
    res.writeHead(200,{'Content-Type':'text/html'});
    //url - property calling used to return the Real Path Of Web Application 
    res.write(req.url);
    res.end();
}).listen(8080);
console.log("Server Listening the Port No.8080");

/* http://localhost:8080/    "/"

  http://localhost:8080/admin    "/admin" */  