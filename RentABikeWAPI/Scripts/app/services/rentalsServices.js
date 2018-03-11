(function () {
    "use strict";

    var myAppModule = angular.module('myApp');

    myAppModule.factory('rentalsServices',['bicyclesServices','customersServices',function (bicyclesServ,customersServ) {
            var bicycles = bicyclesServ.getBicycles();
            var customers = customersServ.getCustomers();

            var rentals = [
                { id: 1, startDate: moment().startOf('day').weekday(0).toDate(), endDate: moment().startOf('day').weekday(0).toDate(), bicycleId: bicycles[2].id, bicycle: bicycles[2], quantity: 2, totPrice: 2 * bicycles[2].rentPrice,paid:false ,customerId: customers[3].id, customer: customers[3] },
                { id: 2, startDate: moment("2011-10-14").toDate(), endDate: moment("2011-10-15").toDate(), bicycleId: bicycles[1].id, bicycle: bicycles[1], quantity: 1, totPrice: 2 * bicycles[1].rentPrice,paid:true , customerId: customers[0].id, customer: customers[0] }
            ];

          var getDays = function (rental) {
                var d = 0;
                if (rental.endDate >= rental.startDate) {
                    d = moment.duration((rental.endDate - rental.startDate)).asDays();
                    return d + 1;
                }
                else {
                    return d;
                }
          }; 

        var getMaxId = function () {
            if (rentals.length == 0)
                return 0;
            var maxId = rentals[0].id;
            angular.forEach(rentals, function (rental) {
                if (rental.id > maxId)
                    maxId = rental.id;
            });
            return maxId;
        };

        var getIndexInArray = function (id) {
            var ind = 0;
            var theIndex = 0;
            angular.forEach(rentals, function (rental) {
                if (rental.id == id)
                {
                    theIndex = ind;
                }
                ind = ind + 1;
            });
            return theIndex;
        };
        
        var updateRentalCustomer = function (r) {
            angular.forEach(customers, function (customer) {
                if(r.customerId==customer.id)
                {
                    r.customer = customer;
                }
            });
        };

        var validateRental = function(rental) {
            if (rental.startDate > rental.endDate) {
                throw new Error("The rental start date cannot be greater than the rental end date!");
            }
        };

        return {
            getRentals: function() {
                return rentals;
            },

            getRental: function (rId) {
                var existingRental = null;
                angular.forEach(rentals, function (rental) {
                    if (rental.id == rId) {
                        existingRental = rental;
                    }
                });
                return existingRental;
            },

            createRental: function () {
                return {
                    startDate:"",
                    endDate: "",
                    bicycleId:bicycles[0].id,
                    bicycle: bicycles[0],
                    quantity: 1,
                    totPrice: bicycles[0].rentPrice,
                    paid:false,
                    customerId:customers[0].id,
                    customer:customers[0],
                };
            },

            addRental: function(rental){
                validateRental(rental);
                updateRentalCustomer(rental);
                rental.id = getMaxId() + 1;  
                rentals.push(rental);
                bicycles
            },

            updateRentalBicycle: function (rental) {
                angular.forEach(bicycles, function (bicyc) {
                    if (bicyc.id == rental.bicycleId) {
                        rental.bicycle = bicyc;
                    }
                });
            },

            updateRental:function(rental){
                validateRental(rental);
                updateRentalCustomer(rental);
            },

            updateTotRentalPrice: function (rental) {
                //validateRental(rental);
                if (!rental.bicycleId)
                {
                    rental.totPrice = 0;
                    return;
                }
                if (!rental.quantity)
                {
                    rental.totPrice = 0;
                    return;
                }
                if (!rental.startDate) {
                    rental.totPrice = rental.quantity * rental.bicycle.rentPrice;
                    return;
                }
                if (!rental.endDate) {
                    rental.totPrice = rental.quantity * rental.bicycle.rentPrice;
                    return;
                }
                rental.totPrice = rental.quantity * rental.bicycle.rentPrice*getDays(rental);
            },

            deleteRental: function (id) {
                var index = getIndexInArray(id);
                rentals.splice(index, 1);
            }         
        };       
    }]);
}());