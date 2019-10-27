'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone', '$scope', 'compraMovil',
      function PhoneComparadorController(Phone, $scope, compraMovil) {
        console.trace('PhoneComparadorController');

        var self = this;

        //self.phones = Phone.query()
        self.phone1 = {};
        self.phone2 = {};
        self.clic = 0;
        self.orderProp = 'age';

        Phone.getAll().then ((res)=> self.phones = res.data);

         self.seleccionar = function(phone){
            console.trace('movil seleccionado');
            self.phone2 = self.phone1;
            self.phone1 = phone;
         } // seleccionar

        
         self.comprarMovil = function(){
          return compraMovil.getProducto();
        }

        // el padre recoge el evento lanzado por el hijo
         $scope.$on('eventoComprar', function(event, data) {
          //alert('eventoCompra en padre ' + data.telefono.id);
          self.alertaId = data.telefono.id;
        })
        
      }
    ]
  });
