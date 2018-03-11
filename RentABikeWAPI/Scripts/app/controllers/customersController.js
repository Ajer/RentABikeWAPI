(function () {
    'use strict';

    var myAppModule = angular.module('myApp');

    myAppModule.controller('CustomersController', ['$scope','customersServices',
        function ($scope, customerServ) {
            $scope.sortPar = "'id'";
            $scope.reverse = false;
            $scope.toggleInd = 1;
            $scope.lastSort = "";
            $scope.id_im = $scope.firstName_im = $scope.lastName_im = $scope.email_im = $scope.phone_im = "content/images/nrm.png";

            $scope.customers = customerServ.getCustomers();

            $scope.delete = function (id) {
                customerServ.deleteCustomer(id);
            };

            var setNgSrc = function (srt,pth) {
                if (srt=="id"){
                    $scope.id_im = pth;
                }
                else if (srt == "firstName") {
                    $scope.firstName_im = pth;
                }
                else if (srt == "lastName") {
                    $scope.lastName_im = pth;
                }
                else if (srt == "email") {
                    $scope.email_im = pth;
                }
                else if (srt == "phone") {
                    $scope.phone_im = pth;
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

                $scope.lastSort = par;
            };
        }        
    ]);
}());
