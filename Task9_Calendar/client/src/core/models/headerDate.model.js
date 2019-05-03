var headerDateModel = (function (dateData) {
    var _dateData = dateData;
    var RESET_MONTH = {
        December: 11,
        January: 0
    }

    function onClickPrevMonth() {
        _dateData.decrementCurrentMonth();

        if (_dateData.getCurrentMonth() == -1) {
            _dateData.decrementCurrentYear();
            _dateData.setCurrentMonth(RESET_MONTH.December);
            _dateData.getDayOfWeek(_dateData.getCurrentMonth());
        }
    }

    function onClickNextMonth() {
        _dateData.incrementCurrentMonth();

        if (_dateData.getCurrentMonth() > RESET_MONTH.December) {
            _dateData.incrementCurrentYear();
            _dateData.setCurrentMonth(RESET_MONTH.January);
            _dateData.getDayOfWeek(_dateData.getCurrentMonth());
        }
    }

    function getViewModel() {
        var headerDateViewModel = {
            tag: "header",
            style: "calendar__header",
            id: "js-headerDate",
            parentId: "js-calendar",
            date: {
                tag: "h1",
                style: "page__date",
                content: _dateData.getMonthName() + " " + _dateData.getCurrentYear(),
            },
            buttonPrev: {
                tag: "button",
                style: "button",
                content: "<",
                id: "js-buttonPrev",
            },
            buttonNext: {
                tag: "button",
                style: "button",
                content: ">",
                id: "js-buttonNext",
            }
        }

        return headerDateViewModel;
    }

    return {
        onClickPrevMonth: onClickPrevMonth,
        onClickNextMonth: onClickNextMonth,
        getViewModel: getViewModel
    }
})(dateData);
