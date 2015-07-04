;(function(){
  "use strict";

  var RoomController = function($scope, $stateParams, $localStorage, RoomFactory) {

    $scope.userInfo = $localStorage.userInfo;
    $scope.selectedStoryIndex = 0;
    $scope.selectedStory = '';
    $scope.users = [];

    RoomFactory.getRoomDetails($stateParams.roomId)
    .success(function(data) {
      $scope.users = data;
    })
    .error(function() {
      window.alert("Error connecting to server");
    });

    RoomFactory.getStories($stateParams.roomId)
    .success(function(data) {
      $scope.stories = data;
      $scope.selectedStory = $scope.stories[$scope.selectedStoryIndex];
    })
    .error(function(){
      //TODO: FIX ERROR HERE
    })

    $scope.changeStory = function(index) {
      $scope.selectedStoryIndex = index;
      $scope.selectedStory = $scope.stories[index];
    };

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
      .error(function(){
        //TODO: FIX ERROR HERE
      });
    };

    $scope.resetCards = function() {
      RoomFactory.resetCards($stateParams.roomId)
      .success(function(data) {
        console.log(data);
      })
      .error(function(){
        //TODO: FIX ERROR HERE
      });
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

    channel.bind('changedUser', function(response) {
      $scope.$apply(function () {
        console.log(response);
      });
    });

    channel.bind('user_id', function(response) {
      $scope.$apply(function () {
        $scope.users = response;
      });
    });

    $scope.cardsFlipped = false;
    channel.bind('card_values', function(response) {
      $scope.$apply(function () {
        $scope.cardsFlipped = true;
        $scope.users = response;
      });
    });

    channel.bind('reset_game', function(response) {
      $scope.$apply(function () {
        $scope.users = response;

      });
    });

  };
  RoomController.$inject = ['$scope', '$stateParams', '$localStorage', 'RoomFactory'];

  angular
  .module('testTemplate')
  .controller('RoomController', RoomController)

})()
