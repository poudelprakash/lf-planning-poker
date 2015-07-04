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

    factory.getRoomDetails = function(id) {
      return ($http({
        method: 'GET',
        url: RESOURCES.apiURL + 'rooms/' + id
      }));
    };

    factory.selectCard = function(id, cardValue) {
      return ($http({
        method: 'GET',
        url: RESOURCES.apiURL + 'rooms/' + id + '/hold_card?card=' + cardValue
      }));
    };

    return factory;
  };
  RoomFactory.$inject = ['$http', 'RESOURCES'];

  angular
  .module('planningPoker')
  .factory('RoomFactory', RoomFactory)

})()
