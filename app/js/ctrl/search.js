searchApp.controller('searchCtrl', function($scope, $http, $routeParams) {

	/**
	 * @function retrieveResults
	 * @description
	 * Retrieves the most relevant results by the given search term
	 */
	$scope.retrieveResults = function() {
		$http.get('data/results.json').success(function(data) {
			$scope.search_results = data;
		});
	};


	/**
	 * @function init
	 * @description
	 * Executes all relevant functions on page load
	 */
	$scope.init = function() {

		$scope.search_term = $routeParams.searchTerm;
		$scope.retrieveResults();

		$scope.map = {
		    center: {
		        latitude: 45,
		        longitude: -73
		    },
		    zoom: 8
		};

	};

	// init
	$scope.init();

});