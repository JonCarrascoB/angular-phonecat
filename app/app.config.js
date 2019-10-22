'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/404', {
          templateUrl: 'error/404.html'
        }).
        when('/comparador', {
          template: '<phone-comparador></phone-comparador>'
        }).
        otherwise('/phones');
    }
  ]);
