var express_obj=require("express");
var app=express_obj();
app.use(express_obj.static(__dirname+"/../expressmodule"));
app.get("/ex",function(res,req){
    res.write("express");
});
app.listen(8080);