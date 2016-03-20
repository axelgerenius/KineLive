
angular.module('page.ficheSuivi').controller('ficheSuiviController', ['$scope', '$location', 'popupPainGraphService',
    function($scope, $location, popupPainGraphService) {

    $scope.criterias = [{type:'Douleur', level: '0'}, {type:'Mobilité', level: '0'}];
    $scope.exercices = ['Etirement avec ballon de Klein. 3 x séries de 3 minutes tous les jours.'];

    $scope.toggleImage = function() {
        popupPainGraphService.openPopup();
    };

    $scope.addCriteria = function() {
        $scope.criterias.push({});
    };

    $scope.addExercice = function() {
        $scope.exercices.push('');
    };

    $scope.doFicheSuiviCreation = function() {

    };

    //Minimal slider config
    $scope.minSlider = {
        value: 100
    };
        
    //Slider with ticks and values
    $scope.slider_ticks_values = {
        value: 5,
        options: {
            ceil: 10,
            step: 1,
            floor: 0,
            showTicksValues: true

        }
    };

    $scope.slider_ticks_values2 = {
        value: 5,
        options: {
            ceil: 100,
            step: 10,
            floor: 0,
            showTicksValues: true

        }
    };

    var captureError = function(e) {
        console.log('captureError' ,e);
    };

    var captureSuccess = function(e) {
        console.log('captureSuccess');
        console.dir(e);
        $scope.sound.file = e[0].localURL;
        $scope.sound.filePath = e[0].fullPath;
    };

    $scope.record = function() {
        navigator.device.capture.captureAudio(
            captureSuccess,captureError,{duration:10});
    };

    $scope.play = function() {
        if(!$scope.sound.file) {
            navigator.notification.alert("Record a sound first.", null, "Error");
            return;
        }
        var media = new Media($scope.sound.file, function(e) {
            media.release();
        }, function(err) {
            console.log("media err", err);
        });
        media.play();
    };
}]);
    
