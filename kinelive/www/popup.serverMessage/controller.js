
angular.module('popup.serverMessage')

.controller('popupServerMessageController', ['$scope',
										'$uibModalInstance',
										function($scope, $uibModalInstance) {
	$scope.close = function() {
		$uibModalInstance.close();
	}											
}]);
