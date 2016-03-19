
angular.module('page.registration')

.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
	
	$stateProvider.state('registration', {
    	url: "/registration",
    	templateUrl: 'page.registration/view.html'
    });
}]);
