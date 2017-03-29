angular.module("MyApp", ["LocalStorageModule"])
.controller("MyController", function ($scope, localStorageService) {
  if(localStorageService.get("angular-todolist")){
    $scope.text = localStorageService.get("angular-todolist");
  }
  else {
    $scope.text = [];
  }

  /*$scope.nombre = "Ruben";
  $scope.email = "ruben@ruben.com";
  //$scope.text = [];
  */
/*
  $scope.enviar = function () {
    $scope.text.push($scope.nombre);//+ $scope.email;
  }*/

  $scope.$watchCollection('text',function(newValue, oldValue){
    localStorageService.set("angular-todolist", $scope.text);
  })

  $scope.enviar = function () {
    $scope.text.push($scope.datos);
    $scope.datos = {};
  }

  $scope.limpiar = function () {
    $scope.text = [];
  }

});
