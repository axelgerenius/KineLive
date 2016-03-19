
angular.module('page.addPatient').controller('addPatientController', ['$scope', function($scope) {

    $scope.doPatientCreation = function() {
        console.log($scope.patient);
    };
}]);
