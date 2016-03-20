
angular.module('ui.mainComponent.tabBarForm')

.controller('uiMainComponentTabBarFormController', ['$scope', '$location', '$state', 'patientService',
		function($scope, $location, $state, patientService) {

	$scope.cancel = function() {
		$state.go("reeducation", {"id" : $state.params.id});
	};

	$scope.validate = function() {
		patientService.addSuiviToPatient($state.params.id);
		$state.go("reeducation", {"id" : $state.params.id});
	};
}]);
