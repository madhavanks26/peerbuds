var myApp= angular.module('sof',['ngRoute']);
myApp.config(function($routeProvider, $locationProvider) {
	  //$locationProvider.html5Mode(true);
	  $locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
    $routeProvider

        // route for the home page
        .when('/sof/html/post.html', {
            templateUrl : '/html/post.html',
            controller  : 'postDetailController'
        });
});