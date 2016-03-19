
angular.module('page.addPatient').controller('addPatientController', ['$scope', '$location', 'patientService',
    function($scope, $location, patientService) {

    $scope.doPatientCreation = function() {
        patientService.add($scope.patient);
        $location.path("/patientList");
    };
}]);
