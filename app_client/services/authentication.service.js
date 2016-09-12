
(function () {

  angular
    .module('Vidzy')
    .service('authentication', authentication);

  authentication.$inject = ['$http','$window'];
  function authentication ($http, $window){

    var saveToken = function (token){
      $window.localStorage['vidzy-token'] = token;
    };

    var getToken = function(){
      return $window.localStorage['vidzy-token'];
    };
    var isLoggedIn = function(){
      var token = getToken();
      if(token){
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;
      } else{
        return false;
      }
    };

    var currentUser = function() {
      if(isLoggedIn()){
        var token = getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return {
          email : payload.email,
          name : payload.name
        };
      }
    };

    register = function(user) {
      return $http.post('/register', user).success(function(data){
        saveToken(data.token);
      });
    };

    login = function(user) {
      return $http.post('/login', user).success(function(data) {
        saveToken(data.token);
      });
    };

    logout = function() {
      $window.localStorage.removeItem('vidzy-token');
    };

    return {
      saveToken : saveToken,
      getToken : getToken,
      login : login,
      register : register,
      logout : logout,
      currentUser : currentUser,
      isLoggedIn : isLoggedIn
    };
  }

})();