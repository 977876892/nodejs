var express=require("express");
var mysql=require("mysql");
var app=express();
app.use(express.static(__dirname+"/../mysql"));
var conn=mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"nodejs" 
});
conn.connect();
conn.query("insert into node(`firstname`,`salary`) values ('sai',2000),('jai om',52000),('sagar',12000),('sri',5000)",function(err){
    if(err){
        throw err;
    }
    console.log("1 record inserted");
});

app.listen(8080);
console.log('runn');