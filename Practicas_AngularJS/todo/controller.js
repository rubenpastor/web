angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController", function($scope, localStorageService) {
    if(localStorageService.get("angular-todolist")){
      $scope.todo = localStorageService.get("angular-todolist");
    }
    else {
      $scope.todo = [];
    }

    /*
    {
      descripcion:
      fecha:
    }
    */
    $scope.$watchCollection('todo',function(newValue, oldValue){
      localStorageService.set("angular-todolist", $scope.todo);
    });

    $scope.addActv = function () {
      $scope.todo.push($scope.newActv);
      $scope.newActv = {};
    }

    $scope.limpiar = function () {
      $scope.todo = [];
    }
});
