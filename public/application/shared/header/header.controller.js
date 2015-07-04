;(function () {
  "use strict";

  function HeaderController($scope, $mdDialog, $state, $localStorage) {

    $scope.profPic = $localStorage.userInfo.photo;
    $scope.userInfo = $localStorage.userInfo;
    $scope.activeTab = $state.current.activeTab;

    var signOut = function () {
      $localStorage.$reset();
      $state.go('login');
    }

    $scope.confirmLogOut = function (ev) {
      console.log(123);
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .parent(angular.element(document.body))
        .title('Are you sure you want to log out?')
        .ariaLabel('Sign Out')
        .ok('Yes')
        .cancel('No')
        .targetEvent(ev);
      $mdDialog.show(confirm).then(function () {
        signOut();
      });
    };

  };
  HeaderController.$inject = ['$scope', '$mdDialog', '$state', '$localStorage'];

  angular
    .module('planningPoker')
    .controller('HeaderController', HeaderController)

})();
