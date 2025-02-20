// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  // 'ionic',
  'ui.router', // ADDED used for dates
  'momentjs',
  'eventsjs',  // ADDED our events module
  'eventUpdateState',
  'eventsListState',
  'eventsDetailState'
])

  .run(function ($state, $rootScope) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
      console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
      event.preventDefault();
      $state.get('events').error = {code: 123, descriptions: 'Exception stack trace'}
      return $state.go('events');
    });


    // $ionicPlatform.ready(function () {
    //   if (window.cordova && window.cordova.plugins.Keyboard) {
    //     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    //     // for form inputs)
    //     cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

    //     // Don't remove this line unless you know what you are doing. It stops the viewport
    //     // from snapping when text inputs are focused. Ionic handles this internally for
    //     // a much nicer keyboard experience.
    //     cordova.plugins.Keyboard.disableScroll(true);
    //   }
    //   if (window.StatusBar) {
    //     StatusBar.styleDefault();
    //   }
      
    //   ADDED START
    //   $state.go("events_list");
    //   ADDED END

    // });
  })
