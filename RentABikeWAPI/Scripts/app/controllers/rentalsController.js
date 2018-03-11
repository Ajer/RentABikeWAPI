(function () {
    'use strict';

    var myAppModule = angular.module('myApp');

    myAppModule.controller('RentalsController', ['$scope','rentalsServices',
        function ($scope, rentalsServ) {
            $scope.sortPar = "'id'";
            $scope.reverse = false;
            $scope.toggleInd = 1;
            $scope.lastSort = "";
            $scope.id_im = $scope.startD_im = $scope.endD_im = $scope.quantity_im = $scope.bName_im = $scope.totPrice_im = $scope.paid_im = $scope.customer_im = "content/images/nrm.png";

            $scope.rentals = rentalsServ.getRentals();

            $scope.delete = function (id) {
                rentalsServ.deleteRental(id);
            };

            var setNgSrc = function (srt,pth) {
                if (srt=="id"){
                    $scope.id_im = pth;
                }
                else if (srt == "startDate") {
                    $scope.startD_im = pth;
                }
                else if (srt == "endDate") {
                    $scope.endD_im = pth;
                }
                else if (srt == "name") {
                    $scope.bName_im = pth;
                }
                else if (srt == "quantity") {
                    $scope.quantity_im = pth;
                }
                else if (srt == "totPrice") {
                    $scope.totPrice_im = pth;
                }
                else if (srt == "paid") {
                    $scope.paid_im = pth;
                }
                else if (srt == "customer") {
                    $scope.customer_im = pth;
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

            //$scope.outputYesNo = function () {
            //    return function (item) {
            //        if (item['paid']) {
            //            return 'Yes';
            //        } else {
            //            return 'No';
            //        }
            //    }
            //};

            //$scope.test = function()
            //{
            //    return 'olle';
            //}
        }        
    ]);
}());
