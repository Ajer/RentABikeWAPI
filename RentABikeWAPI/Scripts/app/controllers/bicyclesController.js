(function () {
    'use strict';

    var myAppModule = angular.module('myApp');

    myAppModule.controller('BicyclesController', ['$scope','$http','$location','bicyclesServices',
        function ($scope,$http,$location,bicycleServ) {
            $scope.sortPar = "'id'";
            $scope.reverse = false;
            $scope.toggleInd = 1;
            $scope.lastSort = "";
            $scope.id_im = $scope.name_im = $scope.typeName_im = $scope.quantity_im = $scope.rentPrice_im = "content/images/nrm.png";

            $http({
                method: "GET",
                url: 'api/bicycle'
            }).success(function (data, status, headers, config) {
                $scope.bicycles = data;
            }).error(function(){
                alert(".....");
            });  //

            $scope.bicycles = bicycleServ.getBicycles();

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
}());
