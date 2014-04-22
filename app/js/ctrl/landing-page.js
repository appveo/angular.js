searchApp.controller('landingPageCtrl', function($scope, $http, $location) {

	/**
	 * @function proceedSearchTerm
	 * @description
	 * Proceeds the given input by user to the search page
	 */
	$scope.proceedSearchTerm = function() {
		$location
			.path('/search/'+$scope.search_term);
	};
});