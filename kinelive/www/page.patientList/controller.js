
angular.module('page.patientList').controller('patientListController', ['$scope', 'patientService',
    function($scope, patientService) {

        $scope.initPatients = function() {
            $scope.patients = patientService.getAll();
        };
    }]);
