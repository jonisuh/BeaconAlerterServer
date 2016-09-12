
(function () {

  angular
    .module('Vidzy')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: '/partials/navigation/navigation.template.html',
      controller: 'navigationCtrl as navvm'
    };
  }

})();