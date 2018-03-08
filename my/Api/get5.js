var exp=require("express");
var fs=require("fs");
var app=exp();
app.use(exp.static(__dirname+"/../Api"));
app.get("/emp",function(req,res){
   fs.readFile(__dirname+"/emp.json",function(err,data){
       res.send(data);
   });
});
app.listen(8080);
console.log("runnn");