var weatherController = (function (weatherModel, weatherView, weatherData, controllers) {
    var _weatherView = weatherView;
    var _weatherModel = weatherModel;
    var _weatherData = weatherData;
    var _controllers = controllers;

    function showWeather(data) {
        _weatherView.render(_weatherModel.getViewModel(data));
    }

    function showWeatherWithData() {
        _weatherData.getWeatherData(showWeather, _controllers.rejWeatherController.showWeatherWithData);
    }

    return {
        showWeatherWithData: showWeatherWithData
    }
})(weatherModel, weatherView, weatherData, controllersObserver._getControllers);

controllersObserver._getControllers.weatherController = weatherController;
controllersObserver.add(datesController.showDates);
