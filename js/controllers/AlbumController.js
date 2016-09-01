app.controller('AlbumController', ['$scope', '$routeParams', 'artists',function($scope, $routeParams, artists) {
  // Your code here
  artists.success(function(data) { 
  		$scope.artist = data[$routeParams.albumId];
    });

  $scope.currentAlbum = parseInt($routeParams.albumId);
  
}]);
