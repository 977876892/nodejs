var fs=require("fs");
//readFileSync
var read=fs.readFileSync("./sample.txt");
console.log("server");
console.log(read);