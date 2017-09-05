/*
var fs = require("fs");
//Create the File
var obj = fs.createWriteStream("sample.txt"); 
    //createWriteStream() is a function in "fs" module
    //this function used to "create the file" and "opens the file"
obj.close(); //closing the stream.    
*/


/*
var fs = require("fs");
var obj = fs.createWriteStream("sample.txt");
obj.write("This is Sample Text !"); //write() function used to write the data to the files
obj.close();
*/
/*
var fs = require("fs");
//append the data synchronously
//fs.appendFileSync("./sample.txt","This is Sync Appended !","utf-8");
//appending the data asyncronously
fs.appendFile("./sample.txt","This is Data Appended Async",function(err){
    if(err){
        console.log("Data Appended Failed !");
    }
});
*/


//var fs = require("fs");
//read the data syncronously
/*var obj = fs.readFileSync("./sample.txt");
console.log(obj.toString());*/
//read data async
/*fs.readFile("./sample.txt",my_fun);
function my_fun(err,data){
    if(err)
        throw err;
    console.log(data.toString());    
}*/


var fs = require("fs");
//fs.unlinkSync("./sample.txt");
fs.unlink("./sample.txt",function(err){
    if(err){
        console.log("Unable to delete the file !");
    }
});
console.log("file deleted successfully !");


