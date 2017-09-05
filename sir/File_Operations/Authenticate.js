var http = require("http");
var url = require("url");

var app = http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
    res.writeHead(200,{'Content-Type': 'application/text'});

    var obj = url.parse(req.url,true).query;
    var uname = obj.uname;
    var upwd = obj.upwd;

    if(uname=='admin' && upwd=='admin'){
        res.write("Login Success !");
    }else{
        res.write("Login Fail !");
    }
    res.end();

});

app.listen(8080);
console.log("Server Listening the Port No.8080");