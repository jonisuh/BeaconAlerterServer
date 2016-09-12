(function () {

  angular
    .module('Vidzy')
    .controller('EditVideoCtrl', editVideoCtrl);

  editVideoCtrl.$inject = ['$scope', '$resource', '$location', '$routeParams', 'authentication'];
  function editVideoCtrl ($scope, $resource, $location, $routeParams, authentication){
       var Videos = $resource('/api/videos/:id', {id: '@_id'}, {
       		update: {
       			method: 'PUT',
       			headers: { Authorization: 'Bearer '+ authentication.getToken() }
       		}

       });
        Videos.get({ id: $routeParams.id }, function(video){
            $scope.video = video;
        });
        $scope.save = function(){
        	Videos.update($scope.video, function(){
        		$location.path('/');
        	});
        }
    }

})();