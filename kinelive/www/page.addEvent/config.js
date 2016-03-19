
angular.module('page.addEvent')

.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
		
	$stateProvider.state('addEvent', {
    	url: "/addEvent",
    	templateUrl: 'page.addEvent/view.html'
    });
}]);
