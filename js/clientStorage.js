module.exports = function(){
    var localforage = require('..\node_modules\localforage\src\localforage.js');

    var carInstance = localforage.createInstance({
        name: "cars"
    });
    

    return {
        
    }

};