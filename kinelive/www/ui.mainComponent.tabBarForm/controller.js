
angular.module('ui.mainComponent.tabBarForm')

.controller('uiMainComponentTabBarFormController', ['$scope', '$location', '$state',
		function($scope, $location, $state) {

	$scope.cancel = function() {
		//$state.go("profile", {"id" : $state.params.id});
	};

	$scope.validate = function() {
		//$state.go("reeducation", {"id" : $state.params.id});
	};
}]);
