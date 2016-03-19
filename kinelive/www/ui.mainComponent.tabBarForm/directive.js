
angular.module('ui.mainComponent.tabBarForm')

.directive('uiMainComponentTabBarForm', [function() {
	return {
		restrict : 'E',
		templateUrl : 'ui.mainComponent.tabBarForm/view.html',
		controller : 'uiMainComponentTabBarFormController',
		controllerAs : 'uiMainComponentTabBarFormController'
	};
}]);
