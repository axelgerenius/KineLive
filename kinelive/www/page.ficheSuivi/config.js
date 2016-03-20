
angular.module('page.ficheSuivi')

.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
		
	$stateProvider.state('ficheSuivi', {
    	url: "/ficheSuivi/{id}",
    	templateUrl: 'page.ficheSuivi/view.html',
		controller : "ficheSuiviController",
		controllerAs : "ficheSuiviController"
    });
}]);
