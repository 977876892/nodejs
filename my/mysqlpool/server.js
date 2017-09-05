var mysql=require("mysql");
var file=require("./config.js");
var express=require("express");
var app=express();
app.use(express.static(__dirname+"/../mysqlpool"));
var pool=mysql.createPool({
    connectionLimit:file.connectionLimit,
    host:file.host,
    user:file.user,
    password:file.password,
    debug:file.debug,
    database:file.database
});
var my_conn;
pool.getConnection(function(err,connection){
     my_conn=connection;
});
app.get("/",function(req,res){
  res.redirect("/angular.html");
});
app.get("/emp",function(req,res){
    my_conn.query("select * from node",function(err,records,fields){
        res.send(records);
    });
});
app.listen(8080);
console.log("runn");