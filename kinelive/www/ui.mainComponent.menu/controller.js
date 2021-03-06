
angular.module('ui.mainComponent.menu')

.controller('uiMainComponentMenuController', ['$scope', '$location',
		function($scope, $location) {
	
	
	$scope.init = function() {
	};
	$scope.init();
	
	$scope.$on('loggedIn', function(event, data) {
		$scope.connected = true;
	});
	
	$scope.$on('loggedOut', function(event, data) {
		$scope.connected = false;
	});
	
	$scope.closeMenu = function() {
		$scope.leftMenuExpanded = false;
	};
	
	$scope.goToLogin = function() {
		$scope.closeMenu();
		$location.path('/login');
	};
	
	$scope.goToRegistration = function() {
		$scope.closeMenu();
		$location.path('/registration');
	};

	$scope.goToProfile = function() {
		$scope.closeMenu();
		$location.path('/profile');
	};

	$scope.goToPatientCreationForm = function() {
		$scope.closeMenu();
		$location.path('/addPatient');
	};

	$scope.goToPatientList = function() {
		$scope.closeMenu();
		$location.path("/patientList");
	};

	$scope.goToHome = function() {
		$scope.closeMenu();
		$location.path("/home");
	};
}]);
