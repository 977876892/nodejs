var express=require("express");
var app=express();
var mysql=require("mysql");

app.use(express.static(__dirname+"/../mysql/one"));

var mysql_db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sai"
});
mysql_db.connect();
app.get("/emp",function(req,res){
    mysql_db.query("select * from table1",function(err,records){
        res.send(records);
    });
});
app.listen(8080);
console.log("run");