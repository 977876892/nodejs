app.controller("homeController",homeController);
homeController.$inject=["$scope","$location","$localStorage","homeService"];
function homeController($scope,$location,$localStorage,homeService) {
    $scope.logout = function () {

       homeService.logout().then(function (res) {
          if(res.data.status=="Logged Out Successfully !"){
              delete $localStorage.mini_project;
              $location.path("/login");
              console.log("Logged Out !");
          }
       });

    };
};