;(function(){
  "use strict";

  var RoomController = function($scope) {

    Pusher.log = function(message) {
      if (window.console && window.console.log) {
        window.console.log(message);
      }
    };

    var pusher = new Pusher('7beb69d6b286bbc5e6fb', {
      encrypted: true
    });
    var channel = pusher.subscribe('test_channel');
    channel.bind('my_event', function(data) {
      alert(data.message);
    });

  };
  RoomController.$inject = ['$scope'];

  angular
  .module('testTemplate')
  .controller('RoomController', RoomController)

})()
