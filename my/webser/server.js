var express=require("express");
var mysql=require("mysql");
var bodyPar=require("body-parser");
var app=express();
app.use(bodyPar.urlencoded({extended:true}));
app.use(bodyPar.json());

var conn=mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"",
    "database":"sai"
})

conn.connect();
app.get("/emp",function(req,res){
   conn.query("select * from table1",function(err,records){
       res.send(records)
   });
});

app.post("/empData",function(req,res){
    var date=new Date();
    var empdata={
        "name":req.body.uname,
        "email":req.body.uemail,
        "address":req.body.uadd,
        "joinning":date
    }
    conn.query('INSERT INTO table1 set ?',empdata,function(err,results,fields){
        if (err) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    })
});

app.get("/empdetail/:name?",function(req,res){
     const userLandVariable = req.params.name;
    conn.query('select * from table1 where name=?',[userLandVariable],function(error,records){
        
         if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
         }else{
          res.json({
            status:true,
            data:records,
            message:'user registered sucessfully'
        })
    }
    });

});

app.put("/empup/:id",function(req,res){
   conn.query(`update table1 set name='${req.body.uname}',email='${req.body.uemail}' where id= ${req.params.id}`,function(error,results){
       if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
         }else{
          res.json({
            status:true,
            data:results,
            message:'user update sucessfully'
        })
    }
   });
});

app.delete("/empdelet/:id",function(req,res){
    conn.query(`delete from table1 where id<${req.params.id}`,function(error,results){
         if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
         }else{
          res.json({
            status:true,
            data:results,
            message:'user delete sucessfully'
        })
       }
    })
});

app.listen(8080);

console.log("runing");