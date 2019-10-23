'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone', '$scope',
      function PhoneComparadorController(Phone, $scope) {
        console.trace('PhoneComparadorController');

        var self = this;

        self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';
        $scope.id;

        self.seleccionar = function(phone){
          console.trace('movil seleccionado');
          self.phone2 = self.phone1;
          self.phone1 = phone;
          
        }

        $scope.$on('comprar', function(event, data) {
          $scope.id = data.id;
      
          $scope.alertaCompra = true;
        })

      }
    ]
});
