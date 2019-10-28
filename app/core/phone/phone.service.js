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
      console.trace('GET ' + url);
      return $http.get(url);
    }

    service.crear = function(movil){
        let url = endpoint;
        console.trace('POST ' + endpoint);
        let body = {
        "age": movil.age, 
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
          "gps": (movil.gps)?movil.gps:false,
          "infrared": (movil.infrared)?movil.infrared:false,
          "wifi": movil.wifi
        },
        "display": {
          "touchScreen":(movil.touchScreen)?movil.touchScreen:false
        },
        "hardware": {
          "accelerometer": (movil.accelerometer)?movil.accelerometer:false,
          "fmRadio": (movil.fmRadio)?movil.fmRadio:false,
          "physicalKeyboard": (movil.physicalKeyboard)?movil.physicalKeyboard:false
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