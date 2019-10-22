'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone',
      function PhoneComparadorController(Phone) {
        console.trace('PhoneComparadorController');

        var self = this;

        self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 = {};
        self.clic = 0;
        self.orderProp = 'age';

        self.seleccionar = function(phone){
          console.trace('movil seleccionado');
          if(self.clic == 0){
            self.phone1 = phone;
            self.clic = 1;
          } else {
            self.phone2 = phone;
            self.clic = 0;
            self.comparar();
          } 
        }

        self.comparar = function(){
          self.ram1 = +self.phone1.storage.ram.split("MB")[0];
          self.ram2 = +self.phone2.storage.ram.split("MB")[0];
          self.flash1 = +self.phone1.storage.flash.split("MB")[0];
          self.flash2 = +self.phone2.storage.flash.split("MB")[0];

          self.difRam = self.ram1 - self.ram2;
          self.difFlash = self.flash1 - self.flash2;

          if(self.ram1 > self.ram2){
            self.difRam1 = "+" + self.difRam;
            self.difRam2 = "-" + self.difRam;
          } else if (self.ram1 < self.ram2) {
            self.difRam1 = "-" + self.difRam;
            self.difRam2 = "+" + self.difRam;
          } else {
            self.difRam1 = self.difRam;
            self.difRam2 = self.difRam;
          }

          if(self.flash1 > self.flash2){
            self.difFlash1 = "+" + self.difFlash;
            self.difFlash2 = "-" + self.difFlash;
          } else if (self.flash1 < self.flash2) {
            self.difFlash1 = "-" + self.difFlash;
            self.difFlash2 = "+" + self.difFlash;
          } else {
            self.difFlash1 = self.difFlash;
            self.difFlash2 = self.difFlash;
          }
        }
      }
    ]
});
