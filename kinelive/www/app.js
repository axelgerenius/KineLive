// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('kinelive', ['ui.router',
	'ngAnimate',
	'ngTouch',
	'popup.serverMessage',
	'ui.mainComponent.titleBar',
	'ui.mainComponent.tabBar',
	'ui.mainComponent.menu',
	'page.home',
	'page.login',
	'page.registration',
	'page.addEvent',
	'page.addPatient'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	// pour désactiver requêtes options de merde
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
	$httpProvider.defaults.headers.delete = {};

	$httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
	// $httpProvider.defaults.headers.post['Content-Type'] = 'LALALALLALALALA';

	$httpProvider.defaults.withCredentials = true;

	// $httpProvider.defaults.xsrfCookieName = "X-CSRF-TOKEN";
	// $httpProvider.defaults.xsrfHeaderName = "X-CSRF-HEADER";

	// $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'X-CSRF-HEADER, X-CSRF-PARAM, X-CSRF-TOKEN';
	// $httpProvider.defaults.headers.common['Access-Control-Expose-Headers']
	// 	= 'X-CSRF-HEADER, X-CSRF-PARAM, X-CSRF-TOKEN';
	// $httpProvider.defaults.headers.common['Access-Control-Allow-Headers']
	// 	= "origin, content-type, accept, authorization, Access-Control-Expose-Headers, Access-Control-Allow-Headers, X-CSRF-HEADER, X-CSRF-PARAM, X-CSRF-TOKEN";

	// $httpProvider.defaults.headers.common['Access-Control-Allow-Origin']
	// 	= "http://127.0.0.1";	

	// $httpProvider.defaults.headers.common['Accept']
	// 	= "http://127.0.0.1";	

	$urlRouterProvider.otherwise("/home");
})

// .run(function($ionicPlatform) {
  // $ionicPlatform.ready(function() {
    // if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      // cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
//       cordova.plugins.Keyboard.disableScroll(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })

.controller('involveIonicController',
		['$scope',
		function($scope) {

	$scope.init = function() {
	};
	$scope.init();

	$scope.openMenu = function() {
		document.getElementById("mainSidenav").style.width = "250px";
		document.getElementById("mainContent").style.marginLeft = "250px";
		if (document.getElementById("titleBar")) {
			document.getElementById("titleBar").style.marginLeft = "250px";
			document.getElementById("tabBar").style.marginLeft = "250px";
		}
		if (document.getElementById("homeTitleBar")) {
			document.getElementById("homeTitleBar").style.marginLeft = "250px";
		}
	};

	$scope.closeMenu = function() {
		document.getElementById("mainSidenav").style.width = "0px";
		document.getElementById("mainContent").style.marginLeft = "0px";
		if (document.getElementById("titleBar")) {
			document.getElementById("titleBar").style.marginLeft = "0";
			document.getElementById("tabBar").style.marginLeft = "0";
		}
		if (document.getElementById("homeTitleBar")) {
			document.getElementById("homeTitleBar").style.marginLeft = "0";
		}
	};
}]);
