var express=require("express");
var fs=require("fs");
var app=express();
app.use(express.static(__dirname+"/../crud"));
app.post("/postemp",function(req,res){
    var my_data={
        "id":5,
        "name":"Hello_5",
        "age":25
    }
    /*fs.readFile(__dirname+"/emp.json",function(err,data){
        var my_obj=JSON.parse(data);
        my_obj["emp5"]=my_data;
        res.send(JSON.stringify(my_obj));
    });*/
    var my_str=JSON.stringify(my_data);
    fs.appendFile(__dirname+"/emp.json",my_str,function(err){
        console.log(err);
    });

});
app.listen(8080);
console.log("run");