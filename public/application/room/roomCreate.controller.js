;(function(){
  "use strict";

  var RoomCreateController = function($scope, $state, RoomFactory) {

    $scope.room = {};

    $scope.createRoom= function() {
      RoomFactory.createRoom($scope.room)
      .success(function() {
        $state.go('lobby');
      })
      .error(function() {
        window.alert("Error connecting to server");
      });
    };

  };
  RoomCreateController.$inject = ['$scope', '$state', 'RoomFactory'];

  angular
  .module('testTemplate')
  .controller('RoomCreateController', RoomCreateController)

})()
