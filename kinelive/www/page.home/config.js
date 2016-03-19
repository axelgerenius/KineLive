
angular.module('page.home')

.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
	
	$stateProvider.state('home', {
    	url: "/home",
    	templateUrl: "page.home/view.html",
    	controller : "pageHomeController",
    	controllerAs : "pageHomeController"
    });
}]);
