var datesController = (function() {
    var _datesView;
    var _datesModel;
    var _child;

    function setChild(child) {
        _child = child;
    }

    function setView(view) {
        _datesView = view;
    }

    function setModel(model) {
        _datesModel = model;
    }
    
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
                style: "calendar__date"
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
        setView: setView,
        setModel: setModel,
        setChild: setChild,
        showDates: showDates
    }
})();