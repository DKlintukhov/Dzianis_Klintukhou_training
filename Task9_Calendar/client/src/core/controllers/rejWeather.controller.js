var rejWeatherController = (function (rejView, model) {
    var _rejWeatherView = rejView;
    var _weatherModel = model;

    function showRejWeather(data) {
        console.log(data);
        var weatherViewModel = {
            tag: "div",
            id: "js-weather",
            parentId: "js-dialogBox",
            style: "weather",
            content: "Погода не доступна",
        }

        _rejWeatherView.render(weatherViewModel);
    }

    function showWeatherWithData() {
        _weatherModel.getWeatherData(showRejWeather, showRejWeather);
    }

    return {
        showWeatherWithData: showWeatherWithData
    }
})(rejWeatherView, weatherModel);
