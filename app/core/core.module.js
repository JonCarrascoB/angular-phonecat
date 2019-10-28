'use strict';

// Define the `core` module
var core = angular.module('core', ['core.phone']);

// definimos service constantes
core.constant("sOperativosConstantes", 
    {
       "so":[
            {
                "nombre": "Android",
                "versiones":
                [
                    {
                        "os": "Android 1.0", 
                        "ui": "Apple Pie"
                    },
                    {
                        "os": "Android 1.1", 
                        "ui": "Bannana Bread"
                    },
                    {
                        "os": "Android 1.5", 
                        "ui": "Cupcake"
                    },
                    {
                        "os": "Android 1.6", 
                        "ui": "Donut"
                    },
                    {
                        "os": "Android 2.0", 
                        "ui": "Eclair"
                    },
                    {
                        "os": "Android 2.2", 
                        "ui": "Froyo"
                    },
                    {
                        "os": "Android 2.3", 
                        "ui": "Gingerbreade"
                    },
                    {
                        "os": "Android 3.0", 
                        "ui": "Honeycomb"
                    },
                    {
                        "os": "Android 4.0", 
                        "ui": "Ice Cream Sandwich"
                    },
                    {
                        "os": "Android 4.1", 
                        "ui": "Jelly Bean"
                    },
                    {
                        "os": "Android 4.4", 
                        "ui": "KitKat"
                    },
                    {
                        "os": "Android 5.0", 
                        "ui": "Lollipop"
                    },
                    {
                        "os": "Android 6.0", 
                        "ui": "Marshmallow"
                    },
                    {
                        "os": "Android 7.0", 
                        "ui": "Nougat"
                    },
                    {
                        "os": "Android 8.0", 
                        "ui": "Oreo"
                    },
                    {
                        "os": "Android 9.0", 
                        "ui": "Pie"
                    },
                    {
                        "os": "Android 10.0", 
                        "ui": " "
                    }
                ]
            },
            {
                "nombre": "iOS",
                "versiones":
                [
                    {
                        "os": "iOS 10.3.4"     
                    },
                    {
                        "os": "iOS 12.4.1" 
                    },
                    {
                        "os": "iOS 13.0"
                    },
                    {
                        "os": "iOS 13.1.3"
                    }
                ]
            }
        
        ]
});
