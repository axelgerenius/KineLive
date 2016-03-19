
angular.module('page.patientList')

.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
		
	$stateProvider.state('patientList', {
    	url: "/patientList",
    	templateUrl: 'page.patientList/view.html'
    });
}]);
