var fs=require("fs");
var read=fs.readFileSync("./sample.txt");
console.log("server");
console.log(read);