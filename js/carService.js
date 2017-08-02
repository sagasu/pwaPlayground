define([], function(){
    var apiUrlPath = 'https://bstavroulakis.com/pluralsight/courses/progressive-web-apps/service/';
    var apiUrlLatest = apiUrlPath + 'latest-deals.php';
    
    
    function loadMoreRequest(){
        fatch(apiUrlLatest)
        .then(function(response){
            return response.json();
        }).then(function(data){
            console.log(data);
        })
    }
    
    return{
        loadMoreRequest: loadMoreRequest
    }
});

