var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var config = require("../db_config/db_config");

var connection = mysql.createConnection({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database,
    debug:config.debug
});
connection.connect();
router.get("/",function(req,res){
    connection.query("select * from emp",function(err,records,fields){
        res.send(records);
    });
});
module.exports=router;