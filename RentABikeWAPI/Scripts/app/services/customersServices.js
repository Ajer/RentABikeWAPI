(function () {
    "use strict";

    var myAppModule = angular.module('myApp');

    myAppModule.factory('customersServices', function () {
      
        var customers = [
                { id: 1, firstName: "Eric",lastName: "Bana", email: "ericbana@swd.com", phone:"+56 72774" },
                { id: 2, firstName: "Susanne",lastName: "Hamilton", email: "s.hamilton@usdf.com", phone:"+67 453995" },
                { id: 3, firstName: "Charles",lastName: "Duke", email:"cduke@hotmail.com", phone:"+66 34229199" },
                { id: 4, firstName: "Martin",lastName: "Anderson", email: "manderson@ftu.com", phone: "+77 4456021" },
                { id: 5, firstName: "Michael", lastName: "Steda", email: "m.steda@ert.com", phone: "+78 45397" },
                { id: 6, firstName: "Michael", lastName: "Stephenson", email: "mstephens@av.gov.com", phone: "+345 239061" },
        ];

        var getMaxId = function () {
            if (customers.length == 0)
                return 0;
            var maxId = customers[0].id;
            angular.forEach(customers, function (customer) {
                if (customer.id > maxId)
                    maxId = customer.id;
            });
            return maxId;
        };

        var getIndexInArray = function (id) {
            var ind = 0;
            var theIndex = 0;
            angular.forEach(customers, function (customer) {
                if (customer.id == id)
                {
                    theIndex = ind;
                }
                ind = ind + 1;
            });
            return theIndex;
        };

        return {
            getCustomers: function() {
                return customers;
            },

            getCustomer: function (cId) {
                var existingCustomer = null;
                angular.forEach(customers, function (customer) {
                    if (customer.id == cId) {
                        existingCustomer = customer;
                    }
                });
                return existingCustomer;
            },

            createCustomer: function () {
                return {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: ""
                };
            },

            addCustomer: function(cust){
                cust.id = getMaxId() + 1;  
                customers.push(cust);
            },

            deleteCustomer: function (id) {
                var index = getIndexInArray(id);
                customers.splice(index, 1);
            }         
        };       
    });
}());