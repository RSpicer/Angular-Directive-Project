app.directive('dirDisplay', function() {
	return {
		templateUrl: 'app/directives/dirTemplate.html',
		link: function(scope, element, attributes){
			element.on('click', function() {
				scope.test = true;
				scope.$apply();
				console.log(scope);
			})
		}
	}
})