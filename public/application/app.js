;
(function () {
  "use strict";
  angular
  .module("testTemplate", ['ui.router', 'ngMaterial', 'ngAnimate', 'ngStorage'])
  //.run(function ($rootScope, $state, $localStorage, $http) {
  //  $rootScope.$on('$stateChangeStart', function (event, toState) {
  //    if ($localStorage.accessToken == null && toState.url != '/login') {
  //      event.preventDefault();
  //      redirectToLogin();
  //    }
  //    $http.defaults.headers.common.Authorization = $localStorage.accessToken;
  //  });
  //  function redirectToLogin() {
  //    $state.go('login');
  //  }
  //});

})();
