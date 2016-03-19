
angular.module('ui.form.registration')

.directive('uiFormRegistration', [function() {
	return {
		restrict : 'E',
		templateUrl : 'ui.form.registration/view.html',
		controller : 'uiFormRegistrationController',
		controllerAs : 'uiFormRegistrationController'
	}
}]);