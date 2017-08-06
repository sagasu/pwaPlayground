var promise = require('es6-promises');
var fetch = require('whatwg-fetch');
var systemJS = require('systemjs');


var carService = require('./carService.js');
var clientStorage = require('./clientStorage.js');

window.pageEvents = {
    loadCarPage: function(carId){
        carService().loadCarPage(carId);
    }
}

carService().loadMoreRequest();