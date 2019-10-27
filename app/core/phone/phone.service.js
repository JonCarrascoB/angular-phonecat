'use strict';

angular.
  module('core.phone').
  factory('Phone', ['$http', '$q',  function($http, $q) {

     let service = {};
     let endpoint = "http://localhost:3000/phones/";

     service.getAll = function(){      
        console.trace('GET ' + endpoint);
        return $http.get(endpoint);
     }


    service.getById = function( id ){
      let url = endpoint + id;
      let movil = {};
      console.trace('GET ' + url);
      let q = $q.defer();

      let p = $http.get(url);
      p.then(
        response =>{ // success antiguo
            console.trace('peticion GET a %s data=%o', url, response);
            movil = response.data;
            q.resolve(movil);
  
        }, response => { // gestion de errores
            console.warn('tenemos un ERROR response: %o', response);
            q.reject('Lo sentimod, la Api ha fallado');
        }
      );
      return q.promise;
    }



      service.crear = function(movil){
        let url = endpoint;
        console.trace('POST ' + endpoint);
        let body = {"age": movil.age, 
                    "id":movil.id, 
                    "name":movil.nombre,
                    "imageUrl":movil.imageUrl,
                    "snippet":movil.snippet,
                    "android":{
                      "os": movil.android
                    },
                    "camera": {
                      "primary": movil.primary
                    },
                    "connectivity": {
                      "cell": movil.cell,
                      "gps": movil.gps,
                      "infrared": movil.infrared,
                      "wifi": movil.wifi
                    },
                    "display": {
                      "touchScreen": movil.touchScreen
                    },
                    "hardware": {
                      "accelerometer": movil.accelerometer,
                      "fmRadio": movil.fmRadio,
                      "physicalKeyboard": movil.physicalKeyboard
                    },
                    "storage":{
                        "flash":movil.flash,
                        "ram":movil.ram
                    }};
        return $http.post(url,body);
      }

      return service;
    }
  ]);