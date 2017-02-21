(function () {

  angular.module('BeaconAlerter', ['ngResource','ngRoute'])
    .config(['$routeProvider', config]);


  function config($routeProvider){
    $routeProvider
        .when('/', {
		    templateUrl: '/partials/home.html',
		    controller: 'HomeCtrl'
		})
		.when('/add-video',{
			templateUrl: '/partials/video-form.html',
            controller: 'AddVideoCtrl'

		})
		.when('/video/:id',{
			templateUrl: '/partials/video-form.html',
			controller: 'EditVideoCtrl'
		})
		.when('/video/delete/:id', {
	        templateUrl: '/partials/video-delete.html',
	        controller: 'DeleteVideoCtrl'
    	})
    	.when('/registration', {
	        templateUrl: '/auth/register/register.view.html',
	        controller: 'RegisterCtrl',
	        controllerAs: 'vm'
    	})
    	.when('/login', {
		  templateUrl: '/auth/login/login.view.html',
		  controller: 'LoginCtrl',
		  controllerAs: 'vm'
		})
        .otherwise({
            redirectTo: '/'
        });
}

})();