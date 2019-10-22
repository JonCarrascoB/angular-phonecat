'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('navbar', {
    templateUrl: 'navbar/navbar.template.html',
    controller: ['$routeParams',
    function navbarController($routeParams) {}

    ]
  });