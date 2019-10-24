'use strict';

core.factory('compraMovil',
    function() {
      
      return {
        
        producto: [],
        cantidad: 0,
        getProducto: function() {
            return (this.producto && this.cantidad);
        },
        setProducto: function(movil) {
          if(this.producto.get(movil.id)){
            this.cantidad = this.cantidad + 1;
          } else {
            this.producto.push(movil);
            this.cantidad = 1;
          }
           
        }

      }; //end return
    } // end function

  );