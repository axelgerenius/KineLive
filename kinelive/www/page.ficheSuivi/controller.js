
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
    
