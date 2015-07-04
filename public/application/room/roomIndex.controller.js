;(function(){
  "use strict";

  var RoomController = function($scope, $stateParams, RoomFactory) {

    $scope.users = [];

    RoomFactory.getRoomDetails($stateParams.roomId)
    .success(function(data) {
      $scope.users = data;
    })
    .error(function() {
      window.alert("Error connecting to server");
    });

    $scope.selectCard = function() {
      RoomFactory.selectCard($stateParams.roomId, 5)
      .success(function(data) {
        console.log(data);
      })
      //TODO: FIX ERROR HERE
    }

    var pusher = new Pusher('7beb69d6b286bbc5e6fb', {
      encrypted: true
    });
    var channel = pusher.subscribe('room' + $stateParams.roomId);
    channel.bind('changedUser', function(response) {
      $scope.$apply(function () {
        $scope.users = response;
      });
    });

  };
  RoomController.$inject = ['$scope', '$stateParams', 'RoomFactory'];

  angular
  .module('planningPoker')
  .controller('RoomController', RoomController)

})()
