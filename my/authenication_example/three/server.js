var express=require("express");
var jwt=require("jwt-simple");
var app=express();
app.use(express.static(__dirname+"/../three"));

app.get("/",function(req,res){
    res.redirect("index.htm");
});

app.get("/login",function(req,res){
        var uname=req.params.name;
        var pwd=req.params.pwd;

        if(uname != '' && pwd != ''){
            var token=jwt.encode({"uname":uname},"123");
            var token_decode=jwt.decode("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.KY2gjBzd-ORMMT97OsEkx-Uw6IzKHdU5knMjgULdnAk","123");
            res.send(token_decode.uname);
        }
});


app.listen(8080);
console.log("run");
