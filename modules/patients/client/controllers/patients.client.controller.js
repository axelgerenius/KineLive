(function () {
  'use strict';

  angular
    .module('patients')
    .controller('PatientsController', PatientsController);

  PatientsController.$inject = ['$scope', '$state', 'patientResolve', '$window', 'Authentication'];

  function PatientsController($scope, $state, patient, $window, Authentication) {
    var vm = this;

    vm.patient = patient;
    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Patient
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.patient.$remove($state.go('patients.list'));
      }
    }

    // Save Patient
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.patientForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.patient._id) {
        vm.patient.$update(successCallback, errorCallback);
      } else {
        vm.patient.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('patients.view', {
          patientId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
