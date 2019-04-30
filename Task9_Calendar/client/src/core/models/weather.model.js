var weatherModel = (function () {
    var _http = http;

    var uri =
        'http://localhost:4444/api/weather';

    function getWeatherData(callback) {
        _http.get(uri, callback)
        .then(function (response) {
            if(callback) {
                callback(response);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return {
        getWeatherData: getWeatherData,
    }
})();