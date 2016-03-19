angular.module('page.reeducation')

.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('reeducation', {
		url : '/reeducation/{id}',
		templateUrl : 'page.reeducation/view.html',
		controller : 'pageReeducationController',
		controllerAs : 'pageReeducationController'
	});
}]);