app.factory('artists', ['$http',function($http){
	return $http.get('https://preview.c9users.io/dirgepye/portfolio/music.json')
		.success(function(data) {
			return data;	
		})
		.error(function(err){
			return err;
		});
}]);
