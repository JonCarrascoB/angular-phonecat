'use strict';

// Register `phoneCesta` component, along with its associated controller and template
angular.
  module('phoneCesta').
  component('phoneCesta', {
    templateUrl: 'phone-cesta/phone-cesta.template.html',
    controller: ['Phone', '$scope', 'compraMovil',
      function PhoneCestaController(Phone, $scope, compraMovil) {
        console.trace('PhoneCestaController');
        var self = this;
        
        self.comprarMovil = function(){
            return compraMovil.getProducto();
        }
        self.eliminar = function(movil){
          console.trace('se hace click para eliminar el movil comprado %o', movil);
        }
      }
    ]
  })