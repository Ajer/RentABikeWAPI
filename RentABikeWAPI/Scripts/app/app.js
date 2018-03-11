(function () {
    "use strict";

    var myAppModule = angular.module('myApp',['ngRoute','ui.bootstrap']);

    myAppModule.config(['$provide', function ($provide) {
        $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate) {
            return function (exception, cause) {
                $delegate(exception, cause);
                alert(exception.message);
            };
        }]);
    }]);


    myAppModule.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {

        $routeProvider.when('/', { templateUrl: 'Scripts/app/views/default.html' })
        .when('/bicycles', { templateUrl: 'Scripts/app/views/bicyclesIndex.html', controller: 'BicyclesController' })
        .when('/bicycles/:bicycleId/edit', { templateUrl: 'Scripts/app/views/bicycleEditor.html', controller: 'BicycleController' })
        .when('/bicycles/new', { templateUrl: 'Scripts/app/views/bicycleEditor.html', controller: 'BicycleController' })
        .when('/customers', { templateUrl: 'Scripts/app/views/customersIndex.html', controller: 'CustomersController' })
        .when('/customers/:customerId/edit', { templateUrl: 'Scripts/app/views/customerEditor.html', controller: 'CustomerController' })
        .when('/customers/new', { templateUrl: 'Scripts/app/views/customerEditor.html', controller: 'CustomerController' })
        .when('/rentals', { templateUrl: 'Scripts/app/views/rentalsIndex.html', controller: 'RentalsController' })
        .when('/rentals/:rentalId/edit', { templateUrl: 'Scripts/app/views/rentalEditor.html', controller: 'RentalController' })
        .when('/rentals/new', { templateUrl: 'Scripts/app/views/rentalEditor.html', controller: 'RentalController' });

    }]);

   
}());