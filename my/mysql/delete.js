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
conn.query("DROP TABLE emp ",function(err){
    if(err){
        throw err;
    }
    
});

app.listen(8080);
console.log('runn');