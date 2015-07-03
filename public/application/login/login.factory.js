(function() {
  "use strict";

  var LogInFactory = function($http, RESOURCES) {
    var factory = {};

    factory.getUserInfo = function(authInfo) {
      return ($http({
        method: 'GET',
        url: RESOURCES.apiURL + '/users/user_info/',
        headers: {
          Authorization: authInfo['access_token']
        }
      }));
    };

    return factory;
  };
  LogInFactory.$inject = ['$http', 'RESOURCES'];

  angular
  .module('testTemplate')
  .factory('LogInFactory', LogInFactory)

})();
