(function () {

  angular
    .module('Vidzy')
    .controller('AddVideoCtrl', addVideoCtrl);

  addVideoCtrl.$inject = ['$scope', '$resource', '$location','$http', 'authentication'];
  function addVideoCtrl ($scope, $resource, $location, $http,authentication){
        $scope.save = function(){
        	/*
            var Videos = $resource('/api/videos');
            Videos.save($scope.video, function(){
                $location.path('/');
            }); */
            $http.post('/api/videos/', $scope.video, {
		        headers: {
		          Authorization: 'Bearer '+ authentication.getToken()
		        }
			}).success(function (data, status, headers, config) {
				$location.path('/');
            })
            .error(function (data, status, header, config) {
            	console.log(status);
            });
        };
    }

})();