angular.module("MyApp", [])
.controller("MyController", function ($scope) {
  $scope.nombre = "Ruben";
  $scope.email = "ruben@ruben.com";
  $scope.text = [];

  $scope.enviar = function () {
    $scope.text.push($scope.nombre);//+ $scope.email;
  }
});
