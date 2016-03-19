
angular.module('ui.mainComponent.tabBarPatient')

.directive('uiMainComponentTabBarPatient', [function() {
	return {
		restrict : 'E',
		templateUrl : 'ui.mainComponent.tabBarPatient/view.html',
		controller : 'uiMainComponentTabBarPatientController',
		controllerAs : 'uiMainComponentTabBarPatientController'
	};
}]);
