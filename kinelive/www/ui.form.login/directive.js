
angular.module('ui.form.login')

.directive('uiFormLogin', [function() {
	return {
		restrict : 'E',
		templateUrl : 'ui.form.login/view.html',
		controller : 'uiFormLoginController',
		controllerAs : 'uiFormLoginController'
	}
}]);