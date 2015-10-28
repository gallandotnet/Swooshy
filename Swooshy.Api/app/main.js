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
            templateUrl: '/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: '/about.html',
            controller: 'aboutController'
        })
          .when('/tech', {
              templateUrl: '/tech.html',
              controller: 'techController'
          })
        // route for the contact page
        .when('/contact', {
            templateUrl: '/contact.html',
            controller: 'contactController'
        });

  
});


azureApp.factory('EmailService', ['$http', function ($http) {

    var urlBase = 'http://localhost:42883/email/';
    var EmailService = {};
    EmailService.message = function () {
        return $http.get(urlBase + '/99');
    };

    return EmailService;
}]);


azureApp.controller('UpdateController', function ($scope, EmailService) {
    $scope.data = null;
    $scope.msg = null;
    function message() {
        EmailService.message()
            .success(function (response) {
                $scope.msg = response;

                console.log("success? : " + response);
            })
            .error(function (error) {
             //   $scope.status = 'Unable to load customer data: ' + error.message;
                console.log("Got an error: " + error);
            });
    }
    message();

   
});