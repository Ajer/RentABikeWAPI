(function () {
    'use strict';

    var myAppModule = angular.module('myApp');

    myAppModule.controller('RentalController', ['$scope','$timeout','$location','$routeParams','bicyclesServices','customersServices','rentalsServices',
        function ($scope, $timeout, $location, $routeParams ,bicyclesServ,customersServ,rentalsServ) {

            $scope.isNew = !$routeParams.rentalId;

            $scope.bicycles = bicyclesServ.getBicycles();
            $scope.customers = customersServ.getCustomers();

            var originalRental = null;

            $scope.rtest = "";

            $scope.rental = [];

            if ($scope.isNew)
            {
                $scope.rental = rentalsServ.createRental();             
                $scope.rentFormHeader = "Add New Rental";
            }
            else
            {
                originalRental = rentalsServ.getRental($routeParams.rentalId);
                $scope.rental = angular.copy(originalRental);
                $scope.rentFormHeader = "Update Rental";
            }
               

            $scope.submit = function () {
                if ($scope.isNew) {
                    rentalsServ.addRental($scope.rental);
                    //bicyclesServ.decrementNrOfBicycles($scope.rental.bicycleId);
                }
                else {
                    angular.copy($scope.rental, originalRental);
                    rentalsServ.updateRental(originalRental);
                }
                $location.path('/rentals');
            };

          
            $scope.cancel = function () {
                $location.path('/rentals');
            };

            $scope.setToday = function () {
                $scope.rental.startDate = moment("2016-09-25").toDate();
                $scope.rental.endDate = moment("2016-09-25").toDate();
                rentalsServ.updateTotRentalPrice($scope.rental);
            };

            $scope.updateBicycle = function () {
                rentalsServ.updateRentalBicycle($scope.rental);
                rentalsServ.updateTotRentalPrice($scope.rental);
            };

            $scope.updateTotalPrice = function () {
                rentalsServ.updateTotRentalPrice($scope.rental);
            };

            $scope.greaterThan = function (value) {
                return function (item) {
                    if (item['quantity'] > value) {
                        return true;
                    } else {
                        return false;
                    }
                }
            };

           
            $scope.$watch('rentalForm.startDate.$invalid', function () {
                if ($scope.rentalForm.startDate.$invalid) {
                    rentalsServ.updateTotRentalPrice($scope.rental);
                }
                else if ($scope.rentalForm.startDate.$valid){
                   
                    rentalsServ.updateTotRentalPrice($scope.rental);
                }
            });

            $scope.$watch('rentalForm.endDate.$invalid', function () {
                if ($scope.rentalForm.endDate.$invalid) {
                    rentalsServ.updateTotRentalPrice($scope.rental);
                }
                else if ($scope.rentalForm.startDate.$valid) {

                    rentalsServ.updateTotRentalPrice($scope.rental);
                }
            });
        }
    ]);
}());
