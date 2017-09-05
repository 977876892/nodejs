var fs = require("fs");

/*fs.readFile("./sample.txt",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});*/

var res = fs.readFileSync("./sample.txt")
console.log(res.toString());