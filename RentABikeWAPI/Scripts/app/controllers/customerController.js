(function () {
    'use strict';

    var myAppModule = angular.module('myApp');

    myAppModule.controller('CustomerController', ['$scope','$location','$routeParams','customersServices',
        function ($scope, $location, $routeParams ,customersServ) {

            $scope.isNew = !$routeParams.customerId;

            var originalCustomer = null;

            $scope.customer = null;

            if ($scope.isNew)
            {
                $scope.customer = customersServ.createCustomer();
                $scope.custFormHeader = "Add New Customer";
            }
            else
            {
                originalCustomer = customersServ.getCustomer($routeParams.customerId);
                $scope.customer = angular.copy(originalCustomer);
                $scope.custFormHeader = "Update Customer";
            }
               

            $scope.submit = function () {
                if ($scope.isNew) {
                    customersServ.addCustomer($scope.customer);
                }
                else {
                    angular.copy($scope.customer, originalCustomer);
                }
                $location.path('/customers');
            };

          
            $scope.cancel = function () {
                $location.path('/customers');
            };
        }
    ]);
}());
