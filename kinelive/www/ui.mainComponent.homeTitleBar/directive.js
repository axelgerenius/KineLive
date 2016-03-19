
angular.module('ui.mainComponent.homeTitleBar')

.directive('uiMainComponentHomeTitleBar', [function() {
	return {
		restrict : 'E',
		templateUrl : 'ui.mainComponent.homeTitleBar/view.html',
		controller : 'uiMainComponentHomeTitleBarController',
		controllerAs : 'uiMainComponentHomeTitleBarController'
	}
}]);
