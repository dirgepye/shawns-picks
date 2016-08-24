app.controller('AlbumController', ['$scope', '$routeParams', 'artists',function($scope, $routeParams, artists) {
  // Your code here
  artists.success(function(data) { 
  		$scope.artist = data[$routeParams.albumId];
    });
	
  // Using this property to create the URL in line 9 of views/book.html
  $scope.currentAlbum = parseInt($routeParams.albumId);
  
}]);
