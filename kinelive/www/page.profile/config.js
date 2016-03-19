angular.module('page.profile')

.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('profile', {
		url : '/profile/{id}',
		templateUrl : 'page.profile/view.html',
		controller : 'pageProfileController',
		controllerAs : 'pageProfileController'
	});
}]);