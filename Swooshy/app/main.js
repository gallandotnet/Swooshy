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
            templateUrl: '/views/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: '/views/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contactController'
        });
});


