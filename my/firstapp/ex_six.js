var http=require("http");
var obj=require("./my_module");
var my_url=require("url");
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	// res.write(obj.my_fun());
	// res.write(req.url);
	var my_properties = my_url.parse(req.url,true).query;
	console.log(my_properties.uname)
	res.end();
}).listen(8080);
console.log("Server Listening the Port No.8080");