
angular.module('ui.mainComponent.tabBarPatient')

.controller('uiMainComponentTabBarPatientController', ['$scope', '$location', '$state',
		function($scope, $location, $state) {

	$scope.goToProfile = function() {

		$state.go("profile", {"id" : $state.params.id});
	};

	$scope.goToReeducation = function() {
		$state.go("reeducation", {"id" : $state.params.id});
	};
}]);
