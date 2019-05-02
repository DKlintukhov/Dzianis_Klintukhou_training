var weatherController = (function (view, rejView, model) {
    var _weatherView = view;
    var _rejWeatherView = rejView;
    var _weatherModel = model;

    function showWeather(data) {
        var weatherViewModel = {
            tag: "div",
            id: "js-weather",
            parentId: "js-dialogBox",
            style: "weather",
            content: {
                city: {
                    tag: "h3",
                    style: "weather",
                    content: "Город: Могилев"
                },
                wind: {
                    tag: "h3",
                    style: "weather",
                    content: "Ветер: " + data.wind + " км/ч"
                },
                temp: {
                    tag: "h3",
                    style: "weather",
                    content: "Температура: " + data.temp + " \u2103"
                },
                desc: {
                    tag: "h3",
                    style: "weather",
                    content: data.desc
                }
            }
        }

        _weatherView.render(weatherViewModel);
    }

    function showWeatherWithData(target) {
        _weatherModel.getWeatherData(showWeather, _rejWeatherView.showWeatherWithData);
    }

    return {
        showWeatherWithData: showWeatherWithData
    }
})(weatherView, rejWeatherController, weatherModel, dateModel);
