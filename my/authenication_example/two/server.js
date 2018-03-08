var express=require("express");
var jwt=require("jwt-simple");
var app=express();
app.use(express.static(__dirname+"/../authenication_example"));

app.get("/",function(req,res){
    res.redirect("/index.html");
}); 
app.get("/login",function(req,res){
    var uname=req.params.name;
    var upwd=req.params.pwd;
     
  if(uname != "" && upwd != ""){
    var token=jwt.encode({"uname":uname},"123");
    var token_dis=jwt.decode("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.KY2gjBzd-ORMMT97OsEkx-Uw6IzKHdU5knMjgULdnAk","123");
    res.send(token+"-----"+token_dis.uname);
  }
  else{
     res.send("error"); 
  }
});


app.listen(8080);
console.log("runnnnnnn");
