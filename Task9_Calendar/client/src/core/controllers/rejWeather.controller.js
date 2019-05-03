var rejWeatherController = (function (rejView, model, weatherData) {
    var _rejWeatherView = rejView;
    var _rejWeatherModel = model;
    var _weatherData = weatherData;

    function showRejWeather() {
        _rejWeatherView.render(_rejWeatherModel.getViewModel());
    }

    function showWeatherWithData() {
        _weatherData.getWeatherData(showRejWeather, showRejWeather);
    }

    return {
        showWeatherWithData: showWeatherWithData
    }
})(rejWeatherView, rejWeatherModel, weatherData);

controllersObserver._getControllers.rejWeatherController = rejWeatherController;