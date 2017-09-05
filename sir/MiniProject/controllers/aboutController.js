app.controller("aboutController",aboutController);
function aboutController($scope,homeService){

    homeService.validate().then(function(res){
        $scope.about = res;
    });

}