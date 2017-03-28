angular.module("mainModule", [])
.filter("removeHtml", function(){
  return function(texto){
    /*
    Devuelve el texto filtrandolo con una expresion regular que quita el HTML
    */
    return String(texto).replace (/<[^>]+>/gm,'');
  }
})
.controller("FiltersController", function ($scope){
  $scope.mi_html = {};
  $scope.mi_html.html = "<p>Hola Mundo</p>";
  $scope.mi_html.title = "titulo";
  $scope.coste = 2;
});
