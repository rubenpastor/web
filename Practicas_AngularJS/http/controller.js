angular.module("MyFirstApp", [])
.controller("FirstController", function($scope, $http){
  $scope.posts = [];
  $scope.newPost = {};
  $http.get("http://jsonplaceholder.typicode.com/posts")
  .then(function(response) {
    $scope.posts = response.data;
  })
  .catch(function(response){
    console.error('Repos error', response.status, response.data);
  })
  .finally(function(){
    console.log("finally finished posts");
  });
  
    $scope.addPost = function (){
      $http.post("http://jsonplaceholder.typicode.com/posts", {
          title: $scope.newPost.title,
          body: $scope.newPost.body,
          userId: 1
      })
      .success(function(data, status, header, config){
        $scope.posts.push($scope.newPost);
        $scope.newPost = {};
      })
      .error(function(err){
        console.log(err);
      });
    }
});
