var weatherController = (function () {
    var _weatherView;
    var _weatherModel;

    function setView(view) {
        _weatherView = view;
    }

    function setModel(model) {
        _weatherModel = model;
    }

    function showWeather(data) {
        var data = JSON.parse(data);
        
        if(data === 0) {
            data = "В данный момент погода недостуна";
        } else {

            // (Фаренгейт — 32) : 1,8 = Цельсий 
            data.temp = Math.round((data.temp - 32) / 1.8);
        }
        var weatherViewModel = {
            tag: "div",
            id: "js-weather",
            parentId: "js-dialogBox",
            style: "weather",
            content: "Могилёв: " + " " + (data ? data.temp : data) + " \u2103",
        }

        _weatherView.render(weatherViewModel);
    }

    function showWeatherData() {
        _weatherModel.getWeatherData(showWeather);
    }

    return {
        setView: setView,
        setModel: setModel,
        showWeatherData: showWeatherData
    }
})();