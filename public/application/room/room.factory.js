;(function(){
  "use strict";

  var RoomFactory = function($http, RESOURCES) {
    var factory = {};

    factory.listRooms = function() {
      return ($http({
        method: 'GET',
        url: RESOURCES.apiURL + 'rooms/'
      }));
    };

    factory.createRoom = function(room) {
      return ($http({
        method: 'POST',
        url: RESOURCES.apiURL + 'rooms',
        data: {
          room: room
        }
      }));
    };

    return factory;
  };
  RoomFactory.$inject = ['$http', 'RESOURCES'];

  angular
  .module('testTemplate')
  .factory('RoomFactory', RoomFactory)

})()
