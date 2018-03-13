(function () {
    "use strict";

    var myAppModule = angular.module('myApp');

    myAppModule.factory('bicyclesServices', function ($http) {

        var bicycleTypes = [
                { id: 1, name: "Road Bike"},
                { id: 2, name: "Childrens Bike"},
                { id: 3, name: "Mountain Bike"},
                { id: 4, name: "Urban Bike"}
        ];


        var bicycles = [
                { id: 1, name: "Roadster 12",type:1 ,typeName:bicycleTypes[0].name, quantity: 5, rentPrice: 15 },
                { id: 2, name: "Bikinator GX",type:2 ,typeName: "Childrens Bike", quantity: 5, rentPrice: 9 },
                { id: 3, name: "BMX Navigator 2000 MX",type:3 ,typeName: "Mountain Bike", quantity: 3, rentPrice: 18 },
                { id: 4, name: "Urban Navigator 4000", type: 4, typeName: "Urban Bike", quantity: 10, rentPrice: 12 },
                { id: 5, name: "Urban Explorer", type: 4, typeName: "Urban Bike", quantity: 10, rentPrice: 12 }
        ];

        var updateBicycleTypeName = function(bicyc){
            angular.forEach(bicycleTypes, function (bTypes) {
                if (bicyc.type==bTypes.id){
                    bicyc.typeName = bTypes.name;
                }
            });
        };

        var getMaxId = function () {
            if (bicycles.length == 0)
                return 0;
            var maxId = bicycles[0].id;
            angular.forEach(bicycles, function (bicycle) {
                if (bicycle.id > maxId)
                    maxId = bicycle.id;
            });
            return maxId;
        };

        var getIndexInArray = function (id) {
            var ind = 0;
            var theIndex = 0;
            angular.forEach(bicycles, function (bicycle) {
                if (bicycle.id == id)
                {
                    theIndex = ind;
                }
                ind = ind + 1;
            });
            return theIndex;
        };

        return {
            getBicycles: function () {
                $http.get("/api/bicycle").then(function(response) {
                    return resp;
                },function(err) {
                    alert(err);
                });
            },

            getBicycle: function (bId) {

                var existingBicycle = null;

                angular.forEach(bicycles, function (bicycle) {
                    if (bicycle.id == bId) {
                        existingBicycle = bicycle;
                    }
                });
                return existingBicycle;
            },

            getBicycleTypes: function(){
                return bicycleTypes;
            },

            createBicycle: function () {
                return {
                    type: bicycleTypes[0].id,
                    typeName: bicycleTypes[0].name,
                    quantity: 1,
                    rentPrice:1
                };
            },

            addBicycle: function(bicyc){
                updateBicycleTypeName(bicyc);
                bicyc.id = getMaxId() + 1;  
                bicycles.push(bicyc);
                
            },

            updateBicycle:function(bicyc){
                updateBicycleTypeName(bicyc);
            },

            decrementNrOfBicycles:function(id){
                var index = getIndexInArray(id);
                bicycles[index].quantity = bicycles[index].quantity - 1;
            },

            deleteBicycle: function (id) {
                var index = getIndexInArray(id);
                bicycles.splice(index, 1);
            }         
        };       
    });
}());