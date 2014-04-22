var searchApp = angular.module("searchApp", [
	"ngRoute",
	"google-maps"
]);

searchApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.

		/**
		 * @route '/'
		 * @description
		 * the landing page
		 */
		when('/', {
			templateUrl: 'landing-page.html',
			controller: 'landingPageCtrl'
		}).

		/**
		 * @route '/search/:searchTerm'
		 * @description
		 * Search results
		 */
		when('/search/:searchTerm', {
			templateUrl: 'search.html',
			controller: 'searchCtrl'
		}).

		/**
		 * @route '/view/:profile'
		 * @description
		 * results page
		 */
		when('/view/:profile', {
			templateUrl: 'profile.html',
			controller: 'profileCtrl'
		}).

		/**
		 * @description
		 * 404 page
		 */
		otherwise({
			redirectTo: '/'
		});
	}
]);