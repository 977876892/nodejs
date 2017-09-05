//createWriteStream
var fs=require("fs");
/*
var my_fs=fs.createWriteStream("sam.txt");
my_fs.close();
*/
/*
var my_fs=fs.createWriteStream("sam.txt");
my_fs.write("hello");
my_fs.close();*/
/*
var my_fs=fs.createWriteStream("sam1.txt");
my_fs.write("hello");
my_fs.close();
*/
/*
fs.appendFileSync("sam.txt","hello world");
*/
/*
var my_fs=fs.appendFile("sam.txt","sairam",function(err){
  if(err){
      throw err;
  }
})
*/
/*
var obj=fs.readFileSync("sam.txt");
console.log(obj);*/
/*
var obj=fs.readFile("sam.txt",function(err,data){
    if(err){throw err;}
    console.log(data.toString());
});
*/

fs.unlink("sam.txt");

console.log("runn");
