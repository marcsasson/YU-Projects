'use strict';

angular.module('yuProjectsApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
        {
            'title': 'Home',
            'link': '/'
        },
        {
            'title': 'Projects',
            'link': '/projects',
            'dropdown': [
                {
                    title: 'View all projects',
                    link: 'projects/'
                },
                {
                title: 'Create',
                link: '/create'
            }]
        }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });