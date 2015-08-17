
    'use strict';

    var reservationAppCtrls,reservationAppServices,dtcontroller;

    angular.module('reservationApp',[
            'ngMessages',
            'reservationApp.controllers',
            'reservationApp.services',
            'ngRoute'
    ]).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'MainCtrl'
        });
    }])

     reservationAppCtrls   = angular.module('reservationApp.controllers',[]);

    reservationAppServices = angular.module('reservationApp.services',[]);
    dtcontroller = angular.module('reservationApp.controllers',[]);

