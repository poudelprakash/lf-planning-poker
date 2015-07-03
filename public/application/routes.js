;
(function () {
  "use strict";
  angular
  .module("testTemplate")

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/lobby');

    $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'application/login/login.html',
      controller: "LogInController"
    })

    .state('lobby', {
      url: '/lobby',
      templateUrl: 'application/lobby/lobby.html',
      controller: "LobbyController"
    })

    .state('room', {
      url: '/room/:roomId',
      templateUrl: 'application/room/room.html',
      controller: "RoomController"
    })

    .state('roomCreate', {
      url: '/room/new',
      templateUrl: 'application/room/roomCreate.html',
      controller: "RoomCreateController"
    })

  });

})();
