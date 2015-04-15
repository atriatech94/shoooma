angular.module('shoooma')
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
		templateUrl: '/pages/home/index.html',
        controller: 'IndexController',
	  })
	  
	   .when('/rent', {
			templateUrl: 'pages/rent/index.html',
			 controller: 'RentIndexController',
             
			})
			
			.when('/about', {
			templateUrl: 'pages/about/index.html',
			
			})
			
			.when('/news', {
			templateUrl: 'pages/news/index.html',
			})
			
			.when('/sales', {
			templateUrl: 'pages/sales/index.html',
			controller: 'SalesIndexController',
			})
			
			.when('/special', {
			templateUrl: 'pages/special/index.html',
			controller: 'SpecialIndexController',
			})
			
			.when('/submit', {
			templateUrl: 'pages/submit/index.html',
			})
			
	  .when('/', {
		  templateUrl: 'pages/home/index.html',
           controller: 'IndexController',
		})
		
		.otherwise({ redirectTo: '/' });
});