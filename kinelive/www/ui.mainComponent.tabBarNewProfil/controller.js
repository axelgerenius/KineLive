
angular.module('ui.mainComponent.tabBarNewProfil')

.controller('uiMainComponenttabBarNewProfilController', ['$scope', '$location', '$state',
		function($scope, $location, $state) {

	$scope.goToProfile = function() {

		$state.go("profile", {"id" : $state.params.id});
	};
}]);
