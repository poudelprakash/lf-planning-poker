;(function() {
  "use strict";

  var MaterialTheme = function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('brown')
    .accentPalette('grey');
  };
  MaterialTheme.$inject = ['$mdThemingProvider'];

  angular
  .module('testTemplate')
  .config(MaterialTheme);

})();
