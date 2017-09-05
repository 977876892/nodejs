/*
    - exports is a predefined property in NodeJS
    - export used to export the Modules, Functions , Variables and Classes.
    - when ever we export the module, 
      automatically we can import this module into some other modules.
    - in nodejs we can export / import the modules.
    - we can export the modules by using "exports".
    Ex.
        exports.var_one = "Welcome";
        exports.my_fun = function(){
            return "Welcome !";
        }
    - we can import the modules by using require().
    
    Ex.
    var obj = require("./my_module.js");    
*/
exports.my_fun = function(){
    return "Welcome to NodeJS !!!";
}