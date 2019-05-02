var headerDateController = (function (model, view, child) {
    var _dateModel = model;
    var _headerDateView = view;
    var _child = child;
    var RESET_MONTH = {
        December: 11,
        January: 0
    }

    function onClickPrevMonth() {
        _dateModel.decrementCurrentMonth();

        if (_dateModel.getCurrentMonth() == -1) {
            _dateModel.decrementCurrentYear();
            _dateModel.setCurrentMonth(RESET_MONTH.December);
            _dateModel.getDayOfWeek(_dateModel.getCurrentMonth());
        }

        showHeaderDate();
        _child.showDates();
    }

    function onClickNextMonth() {
        _dateModel.incrementCurrentMonth();

        if (_dateModel.getCurrentMonth() > RESET_MONTH.December) {
            _dateModel.incrementCurrentYear();
            _dateModel.setCurrentMonth(RESET_MONTH.January);
            _dateModel.getDayOfWeek(_dateModel.getCurrentMonth());
        }

        showHeaderDate();
        _child.showDates();
    }

    function showHeaderDate() {
        var headerDateViewModel = {
            tag: "header",
            style: "calendar__header",
            id: "js-headerDate",
            parentId: "js-calendar",
            date: {
                tag: "h1",
                style: "page__date",
                content: _dateModel.getMonthName() + " " + _dateModel.getCurrentYear(),
            },
            buttonPrev: {
                tag: "button",
                style: "button",
                content: "<",
                id: "js-buttonPrev",
                handler: {
                    event: "click",
                    func: onClickPrevMonth
                }
            },
            buttonNext: {
                tag: "button",
                style: "button",
                content: ">",
                id: "js-buttonNext",
                handler: {
                    event: "click",
                    func: onClickNextMonth
                }
            }
        }

        _headerDateView.render(headerDateViewModel);
    }

    return {
        showHeaderDate: showHeaderDate
    }
})(dateModel, headerDateView, datesController);
