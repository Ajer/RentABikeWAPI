(function () {
    'use strict';

    var myAppModule = angular.module('myApp');

    myAppModule.controller('BicycleController', ['$scope','$location','$routeParams','bicyclesServices',
        function ($scope, $location, $routeParams ,bicyclesServ) {

            $scope.isNew = !$routeParams.bicycleId;

            $scope.bicycleTypes = bicyclesServ.getBicycleTypes();

            var originalBicycle = null;

            if ($scope.isNew)
            {
                $scope.bicycle = bicyclesServ.createBicycle();
                $scope.formHeader = "Add New Bicycle";
            }
            else
            {
                originalBicycle = bicyclesServ.getBicycle($routeParams.bicycleId);
                $scope.bicycle = angular.copy(originalBicycle);
                $scope.formHeader = "Update Bicycle";
            }
               

            $scope.submit = function () {
                if ($scope.isNew) {
                    bicyclesServ.addBicycle($scope.bicycle);
                }
                else {
                    angular.copy($scope.bicycle, originalBicycle);
                    bicyclesServ.updateBicycle(originalBicycle);
                }
                $location.path('/bicycles');
            };

          
            $scope.cancel = function () {
                $location.path('/bicycles');
            };
        }
    ]);
}());
