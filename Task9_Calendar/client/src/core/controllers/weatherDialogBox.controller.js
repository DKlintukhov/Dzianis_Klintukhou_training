var weatherDialogBoxController = (function (model, view, weatherController) {
    var _weatherDialogBoxView = view;
    var _dateModel = model;
    var _weatherController = weatherController;
    var isShow = false;

    function onClickGetWeather(event) {
        isShow = !isShow;
        var target = event.target;
        var currentMonth = _dateModel.getCurrentMonth();
        var elem = document.getElementById("js-dialogBox");
        
        lib.isClassName(target, "calendar__date_next", _dateModel.incrementCurrentMonth);
        lib.isClassName(target, "calendar__date_prev", _dateModel.decrementCurrentMonth);

        isShow  ?   lib.classToggle(elem, "__hide", "__show")
                :   lib.classToggle(elem, "__show", "__hide");

        showWeatherDialogBox(isShow);
        _weatherController.showWeatherWithData();
        // ресет месяца
        _dateModel.setCurrentMonth(currentMonth);
    }

    function onClickCloseWeather() {
        isShow = !isShow;
        var elem = document.getElementById("js-dialogBox");
        lib.classToggle(elem, "__show", "__hide");
    }

    function showWeatherDialogBox(isShow) {
        var styleWeather;

        isShow  ?   styleWeather = "dialog-box calendar__dialog-box __show"
                :   styleWeather = "dialog-box calendar__dialog-box __hide";

        var weatherViewModel = {
            tag: "div",
            style: styleWeather,
            id: "js-dialogBox",
            parentId: "root",
            currentMonth: _dateModel.getCurrentMonth(),
            handler: {
                event: "click",
                func: onClickGetWeather
            },
            bgSummer: "__bg-summer",
            bgAutumn: "__bg-autumn",
            bgWinter: "__bg-winter",
            bgSpring: "__bg-spring",
            buttonClose: {
                tag: "button",
                content: '\u2715',
                style: "button-close",
                handler: {
                    event: "click",
                    func: onClickCloseWeather
                }
            }
        }

        _weatherDialogBoxView.render(weatherViewModel);
    }

    return {
        onClickGetWeather: onClickGetWeather,
        showWeatherDialogBox: showWeatherDialogBox
    }
})(dateModel, weatherDialogBoxView, weatherController);