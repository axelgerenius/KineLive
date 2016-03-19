
angular.module('ui.mainComponent.titleBar')

.directive('uiMainComponentTitleBar', [function() {
	return {
		restrict : 'E',
		templateUrl : 'ui.mainComponent.titleBar/view.html',
		controller : 'uiMainComponentTitleBarController',
		controllerAs : 'uiMainComponentTitleBarController'
	}
}]);
