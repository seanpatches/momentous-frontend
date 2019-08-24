var momentous = angular.module('momentous',[]);

function mainController($scope, $http){
  $scope.formData = {};

  $http.get('/users')
    .success(function(data){
      $scope.users = data
      console.log(data)
    })
    .error(function(data){
      console.log('Error:' + data);
    })

  $scope.createUser = function() {
    $http.post('/users', $scope.formData)
      .success(function(){
        $scope.formData = {};
        $scope.users = data
        console.log(data)
      })
      .error(function(data){
        console.log('Error:' + data)
      })
  }

  $scope.deleteUser = function(id){
    $http.delete('/users/' + id)
    .success(function(data){
      $scope.users = data;
      console.log(data)
    })
    .error(function(data){
      console.log('Error' + data);
    })
    
  }

}