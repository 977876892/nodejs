var express=require("express");
var fs=require("fs");
var app=express();
app.use(express.static(__dirname+"/../Api"));

//GET Method
//http://localhost:8080/emp
app.get("/emp",function(req,res){
    fs.readFile(__dirname+"/emp.json",function(err,data){
        res.send(data);
    });
});

//POST Method
//http://localhost:8080/empadd
app.post("/empadd",function(req,res){
     var my_emp={
            "id":4,
            "name":"Hello_4",
            "age":26
        };
        
    fs.readFile(__dirname+"/emp.json",function(err,data){
         if(err){
           console.log(err);
       }
       var my_obj=JSON.parse(data);
       my_obj["emp4"]=my_emp;
       res.send(JSON.stringify(my_obj));
    });

    var my_str=JSON.stringify(my_emp);
    fs.appendFile(__dirname+"/emp.json",my_str,function(err,data){
            console.log(err);
    });
});

//search method
//http://localhost:8080/search/:id
app.get("/search/:id",function(req,res){
    var id = req.params.id;
    fs.readFile(__dirname+"/emp.json",function(err,data){
        var my_obj=JSON.parse(data);
        var search=my_obj["emp"+id];
        res.send(JSON.stringify(search));
    });
});

//delete method
//http://localhost:8080/empdelete/:id
app.delete("/empdelete/:id",function(req,res){
    var id=req.params.id;
    fs.readFile(__dirname+"/emp.json",function(err,data){
         var my_obj=JSON.parse(data);
         delete my_obj["emp"+id];
         res.send(JSON.stringify(my_obj));
    });
   
});

app.listen(8080);
console.log("run");