/**
 * Created by Shival on 8/12/15.
 */
'use strict';

reservationAppCtrls
    .controller('MainCtrl', ['$http','$scope', function($http, $scope) {



$scope.submitForm = function()
{
    if($scope.submitForm().$valid)
    {
        alert("Are you sure you want to submit the form?");
    }
};


}]);