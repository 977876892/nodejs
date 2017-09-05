var express=require("express");
var route=express.Router();
var mysql=require("mysql");
var config=require("../config/config3");

var sql_db=mysql.createConnection({
    host:config.host,
    user:config.user,
    password:config.password,
    debug:config.debug,
    database:config.database
});

sql_db.connect();


route.get("/",function(req,res){
    sql_db.query("SELECT * FROM `signup`",function(err,records,field){
        res.send(records);
    });
});

module.exports=route;
