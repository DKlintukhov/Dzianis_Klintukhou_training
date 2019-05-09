var weatherDialogBoxModel = (function (dateData) {
    var _dateData = dateData;
    var _currentMonth = _dateData.getCurrentMonth();

    function isSeason(currentMonth) {
        var MONTHS = {
            November: 10,
            March: 2,
            February: 1,
            June: 5,
            May: 4,
            September: 8,
            August: 7,
            December: 11
        }
        var BG_SEASONS = {
            bgSummer: "__bg-summer",
            bgAutumn: "__bg-autumn",
            bgWinter: "__bg-winter",
            bgSpring: "__bg-spring",
        }

        if (currentMonth > MONTHS.November || currentMonth < MONTHS.March) {
            return BG_SEASONS.bgWinter;
        }

        if (currentMonth > MONTHS.February && currentMonth < MONTHS.June) {
            return BG_SEASONS.bgSpring;
        }

        if (currentMonth > MONTHS.May && currentMonth < MONTHS.September) {
            return BG_SEASONS.bgSummer;
        }

        if (currentMonth > MONTHS.August && currentMonth < MONTHS.December) {
            return BG_SEASONS.bgAutumn;
        }
    }

    function onClickWeather(target) {
        _currentMonth = _dateData.getCurrentMonth();

        if(libDOM.isClassName(target, "calendar__date_next")) {
            _dateData.incrementCurrentMonth();
            return;
        }
        if(libDOM.isClassName(target, "calendar__date_prev")) {
            _dateData.decrementCurrentMonth();
            return;
        };
    }

    function getViewModel(isShow) {
        var styleWeather;
        
        isShow  ?   styleWeather = "dialog-box calendar__dialog-box __show " + isSeason(_dateData.getCurrentMonth())
                :   styleWeather = "dialog-box calendar__dialog-box __hide " + isSeason(_dateData.getCurrentMonth());

        var weatherViewModel = {
            tag: "div",
            style: styleWeather,
            id: "js-dialogBox",
            parentId: "root",
            buttonClose: {
                tag: "button",
                content: '\u2715',
                style: "button-close",
            }
        }
        
        _dateData.setCurrentMonth(_currentMonth);

        return weatherViewModel;
    }

    return {
        onClickWeather: onClickWeather,
        getViewModel: getViewModel
    }
})(dateData);