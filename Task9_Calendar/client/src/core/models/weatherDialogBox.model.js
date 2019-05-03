var weatherDialogBoxModel = (function (dateData) {
    var _dateData = dateData;

    function onClickWeather(target) {
        lib.isClassName(target, "calendar__date_next", _dateData.incrementCurrentMonth);
        lib.isClassName(target, "calendar__date_prev", _dateData.decrementCurrentMonth);
    }

    function getViewModel(isShow) {
        var styleWeather;

        isShow  ?   styleWeather = "dialog-box calendar__dialog-box __show"
                :   styleWeather = "dialog-box calendar__dialog-box __hide";

        var weatherViewModel = {
            tag: "div",
            style: styleWeather,
            id: "js-dialogBox",
            parentId: "root",
            currentMonth: _dateData.getCurrentMonth(),

            bgSummer: "__bg-summer",
            bgAutumn: "__bg-autumn",
            bgWinter: "__bg-winter",
            bgSpring: "__bg-spring",
            buttonClose: {
                tag: "button",
                content: '\u2715',
                style: "button-close",
            }
        }

        return weatherViewModel;
    }

    return {
        onClickWeather: onClickWeather,
        getViewModel: getViewModel
    }
})(dateData);