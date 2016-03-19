
angular.module('popup.painGraph')

.factory('popupPainGraphService', ['$rootScope', '$timeout', '$uibModal',
		function($rootScope, $timeout, $uibModal) {
	
	return {
		openPopup : function() {
			$rootScope.model = this.model;
			var popup = $uibModal.open({
				animation: true,
				templateUrl: 'popup.painGraph/view.html',
				controller: 'popupPainGraphController',
				controllerAs: 'popupPainGraphController',
				resolve: {
					scope: function () {
						return $rootScope;
					}
				}
			});
		}
	};
}]);
