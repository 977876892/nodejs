var express=require("express");
var mysql=require("mysql");
var config=require("./config1");
var app=express();
app.use(express.static(__dirname+"/../mysqlpool"));
var conn=mysql.createPool({
    host:config.host,
    user:config.user,
    password:config.password,
    connectioLimit:config.connectionLimit,
    debug:config.debug,
    database:config.database
});
var my_con;
conn.getConnection(function(err,connection){
    my_con=connection;
});
app.get("/emp",function(req,res){
    my_con.query("select * from node",function(err,records,fiels){
         res.send(records);
    })
});



app.listen(8080);
console.log("runnn");