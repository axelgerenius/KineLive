
angular.module('ui.mainComponent.tabBar')

.directive('uiMainComponentTabBar', [function() {
	return {
		restrict : 'E',
		templateUrl : 'ui.mainComponent.tabBar/view.html',
		controller : 'uiMainComponentTabBarController',
		controllerAs : 'uiMainComponentTabBarController'
	};
}]);
