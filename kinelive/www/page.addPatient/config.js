
angular.module('page.addPatient')

.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
		
	$stateProvider.state('addPatient', {
    	url: "/addPatient",
    	templateUrl: 'page.addPatient/view.html'
    });
}]);
