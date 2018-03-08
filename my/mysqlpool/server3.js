var express=require("express");
var app=express();
var config=require("./config3.js");
var mysql=require("mysql");
var connection=mysql.createPool({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database,
    connectionLimit:100,
    debug:config.debug
});

var my_db;
connection.getConnection(function(err,connection){
  my_db=connection;
});

app.get("/pro",function(req,res){
  my_db.query("select * from table1",function(err,records){
      res.send(records);
  });
});
app.listen(8080);
console.log("run");