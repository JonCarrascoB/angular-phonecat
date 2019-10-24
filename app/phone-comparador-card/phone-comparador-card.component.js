angular.
  module('phoneComparadorCard').
  component('phoneComparadorCard', {
    templateUrl: 'phone-comparador-card/phone-comparador-card.template.html',
    bindings: {
        mostrar :'=',
        comparar :'='
    },
    controller: ['Phone', '$scope','compraMovil',
      function PhoneComparadorCardController(Phone, $scope, compraMovil) {
        console.trace('PhoneComparadorCardController');
        var self = this;
        
        // envio al padre
        self.comprar = function(movil){
          console.trace('click boton compra %o', self.mostrar);
          $scope.$emit('eventoComprar', {
            telefono: self.mostrar
          });

          compraMovil.setProducto(self.mostrar);
        }

      }
    ]
})
/**
 * Directiva personalizada para mostrar la comparacion del "Flash" y el "RAM" de los phones
 */
.directive("ipComparar",[function(comparar, mostrar) {
   
    var directiveDefinitionObject ={
      restrict:"E",
      replace : true,
      scope:{
        v1:"@",
        v2: "@",
        mostrar: "@"
      },
      template:"<span ng-show=\"((mostrar)?true:false)\" class=\"label label-{{ (v1 >= v2)?'success':'danger' }}\">{{v1 - v2}}</span>"
    }
     // 
    return directiveDefinitionObject;
}])
/*
.directive("ipTitulo",[function() {
   
    var directiveDefinitionObject ={
      restrict:"E",
      replace : true,
      template:"<h1>Hola Mundo</h1>"
    }
     
    return directiveDefinitionObject;
}]);
*/