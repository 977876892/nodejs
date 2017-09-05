var mysql = require("mysql");
var config = require("./connection_properties/db_config");
var express = require("express");
var app = express();
app.use(express.static(__dirname+"/../MYSQL_PoolMechanism"));

var pool = mysql.createPool({
    connectionLimit:config.connectionLimit,
    host:config.host,
    user:config.user,
    password:config.password,
    debug:config.debug,
    database:config.database
});

var my_connection;
pool.getConnection(function(err,connection){
    my_connection=connection;
});

app.get("/",function(req,res){
    res.redirect("/index.html");
});

app.get("/fetch",function(req,res){
    my_connection.query("select * from node",function(err,records,fields){
        res.send(records);
    });
});
app.listen(8080);
console.log("Server Listening the Port No.8080");