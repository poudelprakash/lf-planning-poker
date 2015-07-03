;(function(){
  "use strict";

  var RoomController = function($scope, $stateParams, RoomFactory) {

    RoomFactory.getRoomDetails($stateParams.roomId)
    .success(function(data) {
      $scope.room = data;

      Pusher.log = function(message) {
        if (window.console && window.console.log) {
          window.console.log(message);
        }
      };

      var pusher = new Pusher('7beb69d6b286bbc5e6fb', {
        encrypted: true
      });

      var channel = pusher.subscribe('room' + $stateParams.roomId);
      channel.bind('my_event', function(data) {
        alert(JSON.stringify(data.message));
      });

    })
    .error(function() {
      window.alert("Error connecting to server");
    });

  };
  RoomController.$inject = ['$scope', '$stateParams', 'RoomFactory'];

  angular
  .module('testTemplate')
  .controller('RoomController', RoomController)

})()
