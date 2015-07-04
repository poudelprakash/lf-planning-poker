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
  .module('planningPoker')
  .constant('RESOURCES', Resources());

})();
