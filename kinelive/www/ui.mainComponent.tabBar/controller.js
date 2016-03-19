
angular.module('ui.mainComponent.tabBar')

.controller('uiMainComponentTabBarController', ['$scope', '$location', 
		function($scope, $location) {
	
	$scope.currentState = null;

	$scope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
		$scope.currentState = toState.name;
	});

	$scope.goToAddEvent = function() {
		$location.path("/addEvent");
	};

	$scope.goToAddPatient = function() {
		$location.path("/addPatient");
	};

	$scope.goToHome = function() {
		$location.path("/home");
	};
	
	$scope.goToCalendar = function() {
		$location.path("/calendar");
	};
}]);
