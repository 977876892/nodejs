var express=require("express");
var route=express.Router();
var mysql=require("mysql");
var config_mysql=require("../mysql/config");

var mysql_conn=mysql.createConnection({
	host:config_mysql.host,
	user:config_mysql.user,
	password:config_mysql.password,
	debug:config_mysql.debug,
	database:config_mysql.database
});

mysql_conn.connect();

route.get("/",function(req,res){
	mysql_conn.query("select * from node",function(err,records,fields){
          res.send(records);
	});
});

module.exports=route;