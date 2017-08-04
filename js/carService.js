module.exports = function(){
    var template = require('./template.js');
    
    var apiUrlPath = 'https://bstavroulakis.com/pluralsight/courses/progressive-web-apps/service/';
    var apiUrlLatest = apiUrlPath + 'latest-deals.php';
    var apiUrlCar = apiUrlPath + 'car.php?carId=';
    
    function loadMoreRequest(){
        fetch(apiUrlLatest)
        .then(function(response){
            return response.json();
        }).then(function(data){
            template().appendCars(data.cars);
        })
    };
    
    function loadCarPage(carId){
        fetch(apiUrlCar + carId)
            .then(function(response){
                return response.text();
            }).then(function(data){
                var el = document.createElement(null);
                el.innerHTML = data;
                document.body.insertAdjacentElement('beforeend', el);
            }).catch(function(){
                alert('cant retrive a page');
            })
    };
    
    return {
        loadMoreRequest: loadMoreRequest,
        loadCarPage: loadCarPage
    }
};