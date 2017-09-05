var express=require("express");
var route=express.Router();
var mysql=require("mysql");
var config=require("../config/config1"); //import config file

var mysql_con=mysql.createConnection({
   host:config.host,
    user:config.user,
    password:config.password,
    debug:config.debug,
    database:config.database
});
mysql_con.connect();


route.get("/",function(req,res){
    mysql_con.query("select * from node",function(res,records,fields){
       res.send(records);
    });
});

module.exports=route;