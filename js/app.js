var promise = require('es6-promises');
var fetch = require('whatwg-fetch');
var systemJS = require('systemjs');

var carService = require('./carService.js');

window.pageEvents = {
    loadCarPage: function(carId){
        carService().loadCarPage(carId);
    }
}

carService().loadMoreRequest();