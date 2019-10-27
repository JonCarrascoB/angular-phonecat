'use strict';

core.factory('compraMovil',
    function() {
      
      return {
        
        productos: new Map(),
        getProducto: function() {
          console.debug('getproductos %s',this.productos.size);
            return Array.from(this.productos.values()); 
        },
        setProducto: function(movil) {
          if( this.productos.get(movil.id) != undefined ){
            this.productos.get(movil.id).cantidad++;
          } else {
            this.productos.set(movil.id, {"cantidad":1, 
                                          "imagen": movil.imageUrl, 
                                          "id":movil.id,
                                          "name":movil.name,
                                          "flash":movil.storage.flash,
                                          "ram":movil.storage.ram
                                        });
          }
           
        }

      }; //end return
    } // end function

  );