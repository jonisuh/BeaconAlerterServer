
(function () {

  angular
    .module('Vidzy')
    .controller('HomeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', '$resource'];
  function homeCtrl ($scope, $resource ) {
    var Videos = $resource('/api/videos');
    Videos.query(function(videos){
        $scope.videos = videos;
    });
  }

})();