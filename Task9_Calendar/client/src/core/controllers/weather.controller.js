var weatherController = (function (weatherModel, weatherView, weatherData) {
    var _weatherView = weatherView;
    var _weatherModel = weatherModel;
    var _weatherData = weatherData;

    function showWeather(data) {
        _weatherView.render(_weatherModel.getViewModel(data));
    }

    function showWeatherWithData() {
        _weatherData.getWeatherData(showWeather, controllers.rejWeatherController.showWeatherWithData);
    }

    return {
        showWeatherWithData: showWeatherWithData
    }
})(weatherModel, weatherView, weatherData, controllers);

controllers.weatherController = weatherController;
