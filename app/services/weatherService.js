app.service('weatherService', function($http, $q) {
	var deferred = $q.defer();
	var finalResponse = {};
	this.getWeather = function(city) {
		console.log(city);
		$http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city)
		.then(function(response) {
			console.log(response)
			finalResponse.weather = response.data.weather[0].description;
			finalResponse.temp = response.data.main.temp;
			deferred.resolve(finalResponse);
		})
		return deferred.promise;
	}
})