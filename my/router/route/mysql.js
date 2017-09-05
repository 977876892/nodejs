var express=require("express");
var router=express.Router();
var mysql=require("mysql");
var config=require("../config/config"); // config file import
var mysql_obj=mysql.createConnection({
    host:config.host,
    user:config.user,
    password:config.password,
    debug:config.debug,
    database:config.database
});

mysql_obj.connect();

router.get("/",function(req,res){
    mysql_obj.query("select * from node",function(err,records,fields){
        res.send(records);
    });
});
module.exports=router;



