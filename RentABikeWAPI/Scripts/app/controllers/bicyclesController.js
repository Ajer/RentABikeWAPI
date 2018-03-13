(function () {
    'use strict';

    var myAppModule = angular.module('myApp');

    myAppModule.controller('BicyclesController', ['$scope','$http','$location','bicyclesServices','operations',
        function ($scope,$http,$location,bicycleServ,operations) {
            $scope.sortPar = "'id'";
            $scope.reverse = false;
            $scope.toggleInd = 1;
            $scope.lastSort = "";
            $scope.id_im = $scope.name_im = $scope.typeName_im = $scope.quantity_im = $scope.rentPrice_im = "content/images/nrm.png";


            operations.ReadAll('api/Bicycle').success(function (data) {
                if (data != null) {
                    $scope.bicycles = data;
                    $scope.ok = true;
                }
                else {
                    $scope.ok = false;
                }

            }).error(function () {

                $scope.ok = false;
                alert('Error loadData');

            });

            //$http({
            //    method: "GET",
            //    url: 'api/bicycle'
            //}).success(function (data) {
               
            //    $scope.bicycles = data;
            //}).error(function(err) {
            //    alert(err);
            //});  

            //$scope.bicycles = bicycleServ.getBicycles();

            $scope.delete = function (id) {
                bicycleServ.deleteBicycle(id);
            };

            var setNgSrc = function (srt,pth) {
                if (srt=="id"){
                    $scope.id_im = pth;
                }
                else if (srt == "name") {
                    $scope.name_im = pth;
                }
                else if (srt == "typeName") {
                    $scope.typeName_im = pth;
                }
                else if (srt == "quantity") {
                    $scope.quantity_im = pth;
                }
                else if (srt == "rentPrice") {
                    $scope.rentPrice_im = pth;
                }
            }

            $scope.sorting = function (par) {
   
                if ($scope.lastSort == par)
                {
                    $scope.toggleInd = $scope.toggleInd + 1;
                   // var myEl = angular.element(document.querySelector('#img_id'));
                   // var q = myEl[0].src;
                }
                else {
                    $scope.toggleInd = 1;
                    if ($scope.lastSort != "") {
                        setNgSrc($scope.lastSort,"content/images/nrm.png");

                       // src = "content/images/nrm.png";
                       // document.getElementById("img_" + $scope.lastSort).src = src;
                    }
                }

                if ($scope.toggleInd == 1)
                {
                    $scope.sortPar = "'" + par + "'";
                    $scope.reverse = false;
                    setNgSrc(par,"content/images/sort_up.png");         
                }
                else if ($scope.toggleInd == 2)
                {
                     $scope.sortPar = "'" + par + "'";
                     $scope.reverse = true;
                     setNgSrc(par,"content/images/sort_down.png");
                }
                else if ($scope.toggleInd == 3) {
                    $scope.sortPar = "'id'";
                    $scope.reverse = false;
                    $scope.toggleInd = 0;
                    setNgSrc(par, "content/images/nrm.png");
                }

                //document.getElementById("img_" + par).src = src;

                $scope.lastSort = par;
            };
        }
    ]);

    myAppModule.factory('operations',
        function ($http) {
            return {
                Create: function (url, data) {
                    return $http({
                        method: 'POST',
                        url: url,
                        data: data
                    });
                },
                ReadAll: function (url) {
                    return $http({
                        method: 'GET',
                        contentType: 'application/json',
                        url: url
                    });
                },
                Read: function (url, parameters) {
                    return $http({
                        method: 'GET',
                        url: url,
                        contentType: 'application/json',
                        params: parameters
                    });
                },
                Update: function (url, parameters, data) {
                    return $http({
                        method: 'PUT',
                        url: url,
                        params: parameters,
                        data: data

                    });
                },
                Delete: function (id) {
                    return $http.delete(url + id);
                }
            }
        }
    );

}());
