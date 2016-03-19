
angular.module('ui.mainComponent.menu')

.directive('uiMainComponentMenu', [function() {
	return {
		restrict : 'E',
		templateUrl : 'ui.mainComponent.menu/view.html',
		controller : 'uiMainComponentMenuController',
		controllerAs : 'uiMainComponentMenuController'
	};
}]);
