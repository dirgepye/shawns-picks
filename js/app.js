var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'HomeController',
        templateUrl: 'js/views/home.html'
    })
    .when('/artists/:albumId', {
        controller: 'AlbumController',
        templateUrl: 'js/views/album.html'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
