
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
		document.getElementById("mainSidenav").style.width = "0";
		document.getElementById("mainContent").style.marginLeft = "0";
		document.getElementById("titleBar").style.marginLeft = "0";
		document.getElementById("tabBar").style.marginLeft = "0";
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
}]);
