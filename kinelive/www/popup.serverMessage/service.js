
angular.module('popup.serverMessage')

.factory('popupServerMessageService', ['$rootScope', '$timeout', '$uibModal',
		function($rootScope, $timeout, $uibModal) {
	
	return {
		model : {
			code : null,
			messageList : null,
			callCounter : 0,
			type : null
		},
		setCodeAndText : function(code, messageList) {
			this.model.code = code;
			this.model.messageList = messageList;
			this.model.callCounter ++;
			this.setMessage(code, messageList);
			this.openPopup();
		},
		openPopup : function() {
			$rootScope.model = this.model;
			var popup = $uibModal.open({
				animation: true,
				templateUrl: 'popup.serverMessage/view.html',
				controller: 'popupServerMessageController',
				controllerAs: 'popupServerMessageController',
				resolve: {
					scope: function () {
						return $rootScope;
					}
				}
			});

			$timeout(function() {
				popup.close();
			}, 7000);
		},
		setMessage : function(code, messageList) {
			this.model.code = code;
			if (code >= 200 && code < 300) {
				this.model.type = "success";
			}
			else if (code >= 400 && code < 500) {
				this.model.type = "warning";
			}
			else if (code >= 500 && code < 600) {
				this.model.type = "error";
			}
			else {
				this.model.type = "unknown";
			}
			this.model.messageList = messageList;
		}
	};
}]);
