var mysql=require("mysql");
var express=require("express");
var app=express(); // server start
var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    debug:false,
    database:"nodejs"
});
conn.connect();
//create

app.get("/creat",function(req,res){
    conn.query("create table emp (eno integer,ename varchar(10))",function(err,res){
        if(err)
        {
            throw err;
        }
    });
});






app.listen(8080);
console.log("runnnn");