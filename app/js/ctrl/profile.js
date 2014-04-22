searchApp.controller('profileCtrl', function($scope, $http, $routeParams) {

	/**
	 * @function retrieveResults
	 * @description
	 * Retrieves the most relevant results by the given search term
	 */
	$scope.retrieveProfile = function() {
		$http.get('data/profile.json').success(function(data) {
			$scope.profile = data;
		});
	};


	/**
	 * @function init
	 * @description
	 * Executes all relevant functions on page load
	 */
	$scope.init = function() {

		$scope.retrieveProfile();

	};

	// init
	$scope.init();

});