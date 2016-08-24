app.controller('HomeController', ['$scope', 'artists', function($scope, artists){
	
	artists.success(function(data) {
		$scope.artists = data;
		$scope.alb = $scope.artists.album;
	});
}]);