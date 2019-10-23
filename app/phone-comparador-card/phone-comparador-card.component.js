angular.
  module('phoneComparadorCard').
  component('phoneComparadorCard', {
    templateUrl: 'phone-comparador-card/phone-comparador-card.template.html',
    bindings: {
        mostrar :'=',
        comparar :'='
    },
    controller: ['Phone', '$scope',
      function PhoneComparadorCardController(Phone, $scope) {
        console.trace('PhoneComparadorCardController');

        $scope.id = "";
        $scope.comprar = function(id){
          console.trace('click en el btn comprar');
          $scope.$emit('comprar', {
            id: $scope.id
           
          })
        }

        

      }
    ]
})

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