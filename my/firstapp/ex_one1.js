var http=require("http");
//var imp=require("./my_module1");
http.createServer(function(req,res){
   res.writeHead(200,{'content-type':'text/plain'});
  // res.write(imp.my_fun());
  res.write(req.url);
   res.end();
}).listen(8080);
console.log("runnnnn");