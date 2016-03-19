
angular.module('page.ficheSuivi').controller('ficheSuiviController', ['$scope', '$location', function($scope, $location) {

    $scope.criterias = [{type:'Douleur', level: '2'}, {type:'Mobilité', level: '3'}, {type:'Amplitude', level: '6'}];

    $scope.addCriteria = function() {
        $scope.criterias.push({});
    };

    $scope.doFicheSuiviCreation = function() {

    };
        
    //Minimal slider config
    $scope.minSlider = {
        value: 10
    };
        
    //Slider with ticks and values
    $scope.slider_ticks_values = {
        value: 5,
        options: {
            ceil: 10,
            floor: 0,
            showTicksValues: true
            
        }
    };
}]);
    
    