'use strict';

core.factory('compraMovil',
    function() {
      
      return {
        producto: [],
        getProducto: function() {
            return this.producto;
        },
        setProducto: function(movil) {
            this.producto.push(movil);
        }

      }; //end return
    } // end function

  );