(function () {

  angular.module('BeaconAlerter', ['ngResource','ngRoute'])
    .config(['$routeProvider', config]);


  function config($routeProvider){
    $routeProvider
        .when('/', {
		    templateUrl: '/partials/home.html',
		    controller: 'HomeCtrl'
		})
        .otherwise({
            redirectTo: '/'
        });
}

})();