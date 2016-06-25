'use strict';

angular.module('myappApp', ['myappApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ngRoute', 'btford.socket-io', 'ui.bootstrap'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
