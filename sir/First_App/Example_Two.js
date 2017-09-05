//import http module (it's predefined module , 
// no need to download by using package.json )
var http = require("http");

//importing the custom module
var obj = require("./my_module");

//create server
http.createServer(function(req,res){
    //set the html as the MIME Type
    res.writeHead(200,{'Content-Type':'text/html'});
    //calling the custom function
    res.write(obj.my_fun());
    //terminating the res.
    res.end();
}).listen(8080);
console.log("Server Listening the Port No.8080");