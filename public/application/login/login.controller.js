;(function(){
  "use strict";

  var LogInController = function($scope, $state, $http, $localStorage, LogInFactory) {


    $scope.signedIn = false;
    var authInfo;

    function succesfulLogin() {
      $state.go('lobby');
    };

    $scope.validateUser = function() {
      LogInFactory.getUserInfo(authInfo)
      .success(function(data) {
        $localStorage.accessToken = authInfo['access_token'];
        $localStorage.userInfo = {
          name: data.name,
          photo: data.image_url,
          email: data.email
        }
        $scope.signedIn = true;
        succesfulLogin();
      })
      .error(function(data) {
        console.log(data);
        $scope.signedIn = false;
      })
    };

    // Here we do the authentication processing and error handling.
    // Note that authResult is a JSON object.
    $scope.processAuth = function (authResult) {
      // Do a check if authentication has been successful.
      if (authResult['access_token']) {
        // Successful sign in.
        authInfo = authResult;
        $scope.validateUser();
      }
      else if (authResult['error']) {
        // Error while signing in.
        console.log(authResult);
        // Report error.
      }
    };

    // When callback is received, we need to process authentication.
    $scope.signInCallback = function (authResult) {
      console.log('authResult', authResult);
      $scope.$apply(function () {
        $scope.processAuth(authResult);
      });
    };

    // Render the sign in button.
    $scope.renderSignInButton = function () {
      gapi.signin.render('signInButton',
      {
        'callback': $scope.signInCallback, // Function handling the callback.
        'clientid': '942629132821-gslqgbhtjqd9bpnn3uavo80k5hnrdovc.apps.googleusercontent.com', // CLIENT_ID from developer console which has been explained earlier.
        'requestvisibleactions': 'http://schemas.google.com/AddActivity', // Visible actions, scope and cookie policy wont be described now,
                                                                          // as their explanation is available in Google+ API Documentation.
        'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email',
        'cookiepolicy': 'single_host_origin',
        'access_type': 'offline',
        'grant_type': 'authorization_code',
        'response_type': 'code'
      }
      );
      console.log("rendered button")
    };

    // Start function in this example only renders the sign in button.
    $scope.start = function () {
      $scope.renderSignInButton();
    };


    // Call start function on load.
    if( window.localStorage['LLMSAccessToken'] == undefined) {
      $scope.start();
    }
    else {
      console.log("You are already signed in");
      succesfulLogin();
    }


  }
  LogInController.$inject = ['$scope', '$state', '$http', '$localStorage', 'LogInFactory'];

  angular
  .module('testTemplate')
  .controller('LogInController', LogInController)

})()
