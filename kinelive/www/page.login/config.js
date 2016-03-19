'use strict';

angular.module('page.login')

.config(['$stateProvider', '$urlRouterProvider',
         function($stateProvider, $urlRouterProvider) {
	
	$stateProvider.state('login', {
    	url: "/login",
    	templateUrl: 'page.login/view.html'
    });
}]);
