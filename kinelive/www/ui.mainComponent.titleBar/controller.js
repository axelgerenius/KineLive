
angular.module('ui.mainComponent.titleBar')

.controller('uiMainComponentTitleBarController', ['$scope',
		function($scope) {

	$scope.init = function() {
	};
	$scope.init();
	
	$scope.$on('loggedIn', function(event, data) {
	});
	
	$scope.$on('loggedOut', function(event, data) {
	});
}]);
