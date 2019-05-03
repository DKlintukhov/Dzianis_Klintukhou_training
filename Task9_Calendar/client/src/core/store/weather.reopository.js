var weatherRepository = (function() {
    var _weatherApi = 'http://localhost:4444/api/weather';

    function getWeatherApi() {
        return _weatherApi;
    }
    
    return {
        getWeatherApi: getWeatherApi
    }
})();