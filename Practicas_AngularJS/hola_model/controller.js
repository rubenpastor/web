var app = angular.module("MyFirstApp", [])
app.controller("FirstController", function ($scope) {
  $scope.nombre = "Ruben";
  $scope.nuevoComentario = {};
  $scope.comentarios = [
    {
        comentario: "Buen tuto",
        username: "Ruben"
    },
    {
        comentario: "Mal tutorial",
        username: "Francisco"
    }
  ];

  $scope.agregarComentario = function () {
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {};
  }
});
