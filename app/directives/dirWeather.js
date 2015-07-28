app.directive('dirWeather', function() {
	return {
		templateUrl: 'app/directives/dirWeather.html',
		scope: {
			currentUser: '=',
			weatherCall: '&'
		},
		controller: function($scope) {
			$scope.weatherCall({data: $scope.currentUser.city}).then(function(response) {
				$scope.currentWeather = response.weather;
				$scope.currentTemp = response.temp;
			});
		}
	}
})