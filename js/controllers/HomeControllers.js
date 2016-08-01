app.controller('HomeController', ['$scope', 'artists', function($scope, artists){
	$scope.helloWorld = "Hellow, world";
	artists.success(function(data) {
		$scope.artists = data;
		$scope.alb = $scope.artists.album;
	});
}]);