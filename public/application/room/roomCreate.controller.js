;(function(){
  "use strict";

  var RoomCreateController = function($scope, $state, $localStorage, RoomFactory) {

    $scope.roomInfo = {};

    $scope.createRoom= function() {
      RoomFactory.createRoom($scope.roomInfo)
      .success(function() {
        $localStorage.userInfo.role = 'moderator';
        $state.go('lobby');
      })
      .error(function() {
        window.alert("Error connecting to server");
      });
    };

  };
  RoomCreateController.$inject = ['$scope', '$state', '$localStorage', 'RoomFactory'];

  angular
  .module('planningPoker')
  .controller('RoomCreateController', RoomCreateController)

})()
