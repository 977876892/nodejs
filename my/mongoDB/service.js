app.factory("demoser",function($http,$scope){
    return{
        node:function(){
           return $http.get("http://localhost:8080/get");
        }
    }
});