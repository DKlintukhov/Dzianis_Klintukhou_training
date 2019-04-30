var weatherDialogBoxController = (function () {
    var _weatherDialogBoxView;
    var _weatherModel;
    var _child;
    var isShow = false;

    function setChild(child) {
        _child = child;
    }

    function setView(view) {
        _weatherDialogBoxView = view;
    }

    function setModel(model) {
        _weatherModel = model;
    }

    function onClickGetWeather(event) {
        isShow = !isShow;
        var target = event.target;
        var currentMonth = _weatherModel.getCurrentMonth();
        var elem = document.getElementById("js-dialogBox");

        //console.log(event.target.childNodes[0]);

        lib.isClassName(target, "calendar__date_next", _weatherModel.incrementCurrentMonth);
        lib.isClassName(target, "calendar__date_prev",  _weatherModel.decrementCurrentMonth);

        isShow  ? lib.classToggle(elem, "__hide", "__show")
                : lib.classToggle(elem, "__show", "__hide");

        showWeatherDialogBox(isShow);
        _child.showWeatherData();
        
        // ресет месяца
        _weatherModel.setCurrentMonth(currentMonth);
    }

    function onClickCloseWeather() {
        isShow = !isShow;
        var elem = document.getElementById("js-dialogBox");
        lib.classToggle(elem, "__show", "__hide");
    }

    function showWeatherDialogBox(isShow) {
        var styleWeather;

        isShow  ? styleWeather = "dialog-box calendar__dialog-box __show"
                : styleWeather = "dialog-box calendar__dialog-box __hide";

        var weatherViewModel = {
            tag: "div",
            style: styleWeather,
            id: "js-dialogBox",
            parentId: "js-calendar",
            currentMonth: _weatherModel.getCurrentMonth(),
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
        setView: setView,
        setModel: setModel,
        setChild: setChild,
        onClickGetWeather: onClickGetWeather,
        showWeatherDialogBox: showWeatherDialogBox
    }
})();