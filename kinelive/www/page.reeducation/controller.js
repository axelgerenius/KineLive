angular.module('page.reeducation')

.controller('pageReeducationController', ['$scope',
											'$location',
											'$state',
											'patientService',
										function($scope,
												$location,
												$state,
												patientService) {

	$scope.init = function() {
		$scope.patient = patientService.get($state.params.id);
	};
	$scope.init();
}]);