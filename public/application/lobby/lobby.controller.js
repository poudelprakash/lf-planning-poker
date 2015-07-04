;(function(){
  "use strict";

  var LobbyController = function($scope, $state, RoomFactory) {

    RoomFactory.listRooms()
    .success(function(data) {
      $scope.projects = data;
    })
    .error(function() {
      window.alert("Error connecting to server");
    });

    $scope.createRoom = function() {
      $state.go('roomCreate');
    }

  };
  LobbyController.$inject = ['$scope', '$state', 'RoomFactory'];

  angular
  .module('planningPoker')
  .controller('LobbyController', LobbyController);

})()
