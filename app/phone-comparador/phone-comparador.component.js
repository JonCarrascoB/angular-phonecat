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

        self.phones = [];
        self.phone1 = {};
        self.phone2 = {};
        self.clic = 0;
        self.orderProp = 'age';
        self.resolute = {};

        Phone.getAll().then(function(res) {
          self.phones = res.data;
          self.resolutionFilter();
        });
       

        // funciones
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
       
        self.resolutionFilter = function(){
          self.resolTemp = self.phones.filter(e => e.camera != "" && e.camera != undefined);
          self.resolute = self.resolTemp.map(e => e.camera.primary).filter((v,i,a)=>a.indexOf(v)===i);
        };

       


      }
    ]
  });
