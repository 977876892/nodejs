var express=require("express");
var mysql=require("mysql");
var app=express();

app.use(express.static(__dirname+"/../mysql"));

var conn=mysql.createConnection({
    "host":"localhost",
    "password":"",
    "database":"nodejs",
    "user":"root"
});
conn.connect();

app.get("/select",function(req,res){
    conn.query("select max(salary) from node where salary < (select max(salary) from node)",function(err,records){
        res.send(records);
    });
    
});

app.post("/post",function(req,res){
    conn.query("INSERT INTO `node`(`firstname`, `salary`) VALUES ('a sairam patro',25000) ",function(err){
        if(err){
            throw err;
        }
    });
});

app.delete("/delete",function(req,res){
    conn.query("delete from node where firstname='jai'",function(err){
        if(err){
            throw err;
        }
    });
});

app.put("/put",function(req,res){
    conn.query("update node set firstname='ommmmm' where id=21");
});


app.listen(8080);
console.log("runnnnnnnnn");