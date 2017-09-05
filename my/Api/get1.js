var express=require("express");
var fs=require("fs");
var app=express(); //server start
app.use(express.static(__dirname+"/../Api"));  //deploy the file
 //get the data
app.get("/emp",function(req,res){
  fs.readFile(__dirname+"/emp.json",function(err,data){
      res.send(data);
  });
});

//post data

app.post("/post",function(req,res){
    var my_app={
        "id":5,
        "name":"Hello_5",
        "age":22
    } /*
    fs.readFile(__dirname+"/emp.json",function(err,data){
        var my_obj=JSON.parse(data);
        my_obj["emp5"]=my_app;
        res.send(JSON.stringify(my_obj));
    });*/
    
        var my_str=JSON.stringify(my_app);
    fs.appendFile(__dirname+"/emp.json",my_str,function(err){
        
    })
});


//search

app.get("/sea/:id",function(req,res){
    var id=req.params.id;
   fs.readFile(__dirname+"/emp.json",function(err,data){
        var my_obj=JSON.parse(data);
        var search=my_obj["emp"+id];
        res.send(JSON.stringify(search));
   });
});

//delete
app.delete("/dele/:id",function(req,res){
    fs.readFile(__dirname+"/emp.json",function(err,data){
        var my_obj=JSON.parse(data);
        delete my_obj[req.params.id];
        res.send(JSON.stringify(my_obj));
    });
});






app.listen(8080);
console.log("runnn");