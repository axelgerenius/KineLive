
angular.module('ui.mainComponent.tabBarNewProfil')

.directive('uiMainComponentTabBarNewProfil', [function() {
	return {
		restrict : 'E',
		templateUrl : 'ui.mainComponent.tabBarNewProfil/view.html',
		controller : 'uiMainComponenttabBarNewProfilController',
		controllerAs : 'uiMainComponenttabBarNewProfilController'
	};
}]);
