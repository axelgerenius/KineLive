
angular.module('page.addPatient').controller('addPatientController', ['$scope', 'patientService',
    function($scope, patientService) {

    $scope.doPatientCreation = function() {
        patientService.add($scope.patient);
    };
}]);
