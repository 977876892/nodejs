var express=require("express");
var mysql=require("mysql");
var app=express();
app.use(express.static(__dirname+"/../mysql"));
var conn=mysql.createConnection({
   host:"localhost", 
   password:"",
   user:"root",
   database:"nodejs"
   
});
conn.connect();

app.get("/emp",function(req,res){
    conn.query("select * from node",function(err,records,fields){
        res.send(records);
    });
});
app.listen(8080);
console.log("runn");