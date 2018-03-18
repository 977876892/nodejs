var express=require("express");
var mysql=require("mysql");
var route=express.Router();
var config_mysql=require("../mysql/config4");

var my_sql=mysql.createConnection({
   host:config_mysql.host,
	user:config_mysql.user,
	password:config_mysql.password,
	debug:config_mysql.debug,
	database:config_mysql.database
})
my_sql.connect();

route.get('/',function(req,res){
    my_sql.query("select * from emp",function(err,records,fields){
        res.send(records);
    });
});

route.get('/emp',function(req,res){
    my_sql.query("select * from emp",function(err,records,fields){
        res.send(records);
    });
});

route.get('/example',function(req,res){
    my_sql.query("select * from example",function(err,records,fields){
        res.send(records);
    });
});


module.exports=route;