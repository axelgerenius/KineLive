
angular.module('page.ficheSuivi').controller('ficheSuiviController', ['$scope', '$location', function($scope, $location) {

    $scope.criterias = [{type:'Douleur', level: '2'}, {type:'Mobilité', level: '3'}, {type:'Amplitude', level: '6'}];

    $scope.addCriteria = function() {
        $scope.criterias.push({});
    };

    $scope.doFicheSuiviCreation = function() {

    };
}]);
