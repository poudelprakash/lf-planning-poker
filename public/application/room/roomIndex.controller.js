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

    $scope.selectCard = function(selectedCard) {
      RoomFactory.selectCard($stateParams.roomId, selectedCard)
      .success(function(data) {
        console.log(data);
      })
      .error(function(){
        //TODO: FIX ERROR HERE
      });
    };

    $scope.flipCard = function() {
      RoomFactory.flipCard($stateParams.roomId)
      .success(function(data) {
        console.log(data);
      })
      .error(function() {
        window.alert("Error connecting to server");
      })
    };

    var pusher = new Pusher('7beb69d6b286bbc5e6fb', {
      encrypted: true
    });
    var channel = pusher.subscribe('room' + $stateParams.roomId);

    channel.bind('changedUser', function(response) {
      $scope.$apply(function () {
        $scope.users = response;
      });
    });

    channel.bind('user_id', function(response) {
      $scope.$apply(function () {
        console.log(response);
      });
    });

    channel.bind('changedUser', function(response) {
      $scope.$apply(function () {
        console.log(response);
      });
    });

  };
  RoomController.$inject = ['$scope', '$stateParams', 'RoomFactory'];

  angular
  .module('testTemplate')
  .controller('RoomController', RoomController)

})()
