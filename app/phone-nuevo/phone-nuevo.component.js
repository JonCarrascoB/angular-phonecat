angular.
  module('phoneNuevo').
  component('phoneNuevo', {
    templateUrl: 'phone-nuevo/phone-nuevo.template.html',
    controller: ['Phone', '$scope', 'sOperativosConstantes', '$routeParams',
      function PhoneNuevoController(Phone, $scope, sOperativosConstantes, $routeParams) {
        console.trace('PhoneComparadorCardController');
        var self = this;
        self.form = {};

        // añadimos las constantes para el select de Sistemas Operativos
        self.so = sOperativosConstantes.so;
        self.change = function(index){
            self.version = self.so[index].versiones;
        }
        
        let id = $routeParams.phoneId;
        if ( id  ) {   //buscar telefono por id
          Phone.getById(id).then(
            (res)=>{
              console.debug('telefono encontrado');
              self.form = res.data;
            },
            ()=>{
              console.warn('telefono NO encontrado');
            }
          );

        }
        
        self.guardar = function(){
            console.trace('click nuevo movil nombre: %o', self.form.name);
            if(self.form.name == undefined || self.form.name == null){
                console.warn('No se ha introducido ningun valor');
            } else{
                let p = Phone.crear(self.form);
                p.then(
                    response=>{
                        console.debug('Telefono creado');
                    },
                    response=>{
                        console.warn('Error al crear el telefono');
                    }
                )
            }
        }

        

      }
    ]
})
