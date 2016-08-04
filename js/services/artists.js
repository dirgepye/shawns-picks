app.factory('artists', ['$http',function($http){
	return $http.get('js/music.json')
		.success(function(data) {
			return data;	
		})
		.error(function(err){
			return err;
		});
}]);
