var weatherDialogBoxController = (function (model, view) {
    var _weatherDialogBoxView = view;
    var _weatherDialogBoxModel = model;
    var _isShow = false;

    function onClickWeather(event) {
        _isShow = !_isShow;
        var target = event.target;
        _weatherDialogBoxModel.onClickWeather(target);
        showWeatherDialogBox(_isShow);
    }

    function showWeatherDialogBox(isShow) {
        _weatherDialogBoxView.render(_weatherDialogBoxModel.getViewModel(isShow));
        controllers.weatherController.showWeatherWithData();
    }

    return {
        onClickWeather: onClickWeather,
        showWeatherDialogBox: showWeatherDialogBox
    }
})(weatherDialogBoxModel, weatherDialogBoxView);


controllers.weatherDialogBoxController = weatherDialogBoxController;