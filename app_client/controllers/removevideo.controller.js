(function () {

  angular
    .module('Vidzy')
    .controller('DeleteVideoCtrl', deleteVideoCtrl);

  deleteVideoCtrl.$inject = ['$scope', '$resource', '$location', '$routeParams','authentication'];
  function deleteVideoCtrl ($scope, $resource, $location, $routeParams, authentication){
		var Videos = $resource('/api/videos/:id', {} , {
       		delete: {
       			method: 'DELETE',
       			headers: { Authorization: 'Bearer '+ authentication.getToken() }
       		}

       });

		Videos.get({ id: $routeParams.id}, function(video){
			$scope.video = video;
		});
		 $scope.delete = function(){
            Videos.delete({ id: $routeParams.id }, function(video){
                $location.path('/');
            });
        }
	}
})();