var weatherData = (function (service, weatherRepository) {
    var _http = service;
    var _weatherRepo = weatherRepository;
    var uri = _weatherRepo.getWeatherApi();

    function getWeatherData(res, rej) {
        _http.get(uri)
            .then(function (data) {
                var weatherData = {
                    city: data.data.name,
                    // перевод из f в c
                    temp: Math.floor((data.data.main.temp - 32) / 1.8),
                    desc: data.data.weather[0].description,
                    // перевод из миль в км
                    wind: Math.floor(data.data.wind.speed * 1.609)
                }

                res(weatherData);
            })
            .catch(function (error) {
                if (rej) {
                    rej(error);
                }
            });
    }

    return {
        getWeatherData: getWeatherData,
    }
})(http, weatherRepository);
