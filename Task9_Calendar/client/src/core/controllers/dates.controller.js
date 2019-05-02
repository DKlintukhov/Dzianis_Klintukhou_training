var datesController = (function (view, model, child) {
    var _datesView = view;
    var _datesModel = model;
    var _child = child;

    function onClickGetWeather(event) {
        _child.onClickGetWeather(event);
    }

    function showDates() {
        var datesViewModel = {
            tag: "div",
            style: "calendar__dates",
            id: "js-dates",
            parentId: "js-calendar",
            dateOfWeek: _datesModel.getDayOfWeek(),
            content: _datesModel.getDates(),
            currentMonthLastDay: _datesModel.getCurrentMonthLastDay(_datesModel.getCurrentYear, _datesModel.getCurrentMonth()),
            currentDay: _datesModel.getCurrentDate(),
            currentMonth: _datesModel.getCurrentMonth(),
            currentYear: _datesModel.getCurrentYear(),
            handler: {
                event: "click",
                func: onClickGetWeather
            },
            date: {
                style: "calendar__date_simple"
            },
            currentDate: {
                style: "calendar__date_current"
            },
            prevDate: {
                style: "calendar__date_prev"
            },
            nextDate: {
                style: "calendar__date_next"
            },
        }

        _datesView.render(datesViewModel);
    }

    return {
        showDates: showDates
    }
})(datesView, dateModel, weatherDialogBoxController);
