app.directive('homeDisplay', function(){
    return {
        restrict: 'E',
        scope: {
            artist: '='
        },
        templateUrl: "js/directives/homeDisplay.html"
    };
});