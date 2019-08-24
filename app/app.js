var momentousApp = angular.module('momentousApp', []);

momentousApp.controller('userController', function UserListController($scope) {
  $scope.users = [
    {
    name: 'Sean',
    email: 'smn@email.com',
    },
    {
    name: 'Matt',
    email: 'Matt@email.com',
    }
  ]
});