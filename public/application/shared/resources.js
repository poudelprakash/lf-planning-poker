;
(function () {
  "use strict";
  var Resources = function () {
    return {
      apiURL: '/api/v1/',
      UNAUTHORIZED: '401'
    };
  }

  angular
  .module('testTemplate')
  .constant('RESOURCES', Resources());

})();
