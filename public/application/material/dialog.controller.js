;(function() {
  "use strict";

  var DialogController = function ($scope, $mdDialog) {

    $scope.finalStoryPoint = 0;

    $scope.hide = function() {
      $mdDialog.hide();
    }

    $scope.submit = function() {
      $scope.setStoryPoint($scope.finalStoryPoint);
      $mdDialog.hide();
    };
  };
  DialogController.$inject = ['$scope', '$mdDialog'];

  angular
  .module('testTemplate')
  .controller('DialogController', DialogController)

})();
