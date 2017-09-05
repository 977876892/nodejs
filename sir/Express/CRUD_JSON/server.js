var express = require("express");
var fs = require("fs");
var app = express();
app.use(express.static(__dirname+"/../CRUD_JSON"));
app.get("/employess",function(req,res){
    fs.readFile(__dirname+"/emp.json",function(err,data){
        res.send(data);
    });
});

//Adding the Employee Dynamically.
app.post("/addEmp",function(req,res){
   var my_emp={
        "id":4,
        "name":"Hello_4",
        "age":26
   };
   fs.readFile(__dirname+"/emp.json",function(err,data){
       if(err){
           console.log(err);
       }
       var my_obj = JSON.parse(data);
       my_obj["emp4"]=my_emp;
       res.send(JSON.stringify(my_obj));
   });

   var my_str = JSON.stringify(my_emp);
   fs.appendFile(__dirname+"/emp.json",my_str,function(err){
        console.log(err);
   });
});

app.get("/search/:id",function(req,res){
    var id = req.params.id;
    console.log(id);
    fs.readFile(__dirname+"/emp.json",function(err,data){
        var my_obj = JSON.parse(data);
        var searchResult = my_obj["emp"+id];
        res.send(JSON.stringify(searchResult));
    });
});


app.delete("/del/:name",function(req,res){
    fs.readFile(__dirname+"/emp.json",function(err,data){
       var my_obj = JSON.parse(data);
       delete my_obj[req.params.name];
       res.send(JSON.stringify(my_obj));
    });
});


app.listen(8080);
console.log("Server Listening the Port No.8080");