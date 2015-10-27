/**
 * Created by garyallan on 10/10/2015.
 */
// create the module and name it azureApp
var azureApp = angular.module('azureApp', ['ngRoute']);

// configure our routes
azureApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contactController'
        });
});

// create the controller and inject Angular's $scope
azureApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Angularjs making this possible!';
});

azureApp.controller('aboutController', function ($scope) {
    $scope.message = 'The about page brought to you by Angularjs routing...';
});

azureApp.controller('contactController', function ($scope) {
    $scope.message = 'Angularjs presenting the contact page...';
});