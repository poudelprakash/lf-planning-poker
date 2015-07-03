;
(function () {
  "use strict";
  angular
  .module("testTemplate")

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'application/dashboard/dashboard.html',
      controller: "DashboardController"
    })

  });

})();
