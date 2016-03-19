
angular.module('popup.painGraph')

.controller('popupPainGraphController', ['$scope',
										'$uibModalInstance',
										function($scope, $uibModalInstance) {
	$scope.close = function() {
		$uibModalInstance.close();
	}											
}]);
