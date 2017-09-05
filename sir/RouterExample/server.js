var express = require("express");
var mysql_route = require("./routes/mysql");
var app = express();
app.use(express.static(__dirname+"/../RouterExample"));
app.use("/mysql",mysql_route);
var mongodb_route = require("./routes/mongodb");
app.use("/mongodb",mongodb_route);
app.listen(8080);
console.log("Server Listening the Port No.8080");