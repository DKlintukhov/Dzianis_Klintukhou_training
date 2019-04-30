var headerDateController = (function() {
    var _dateModel;
    var _headerDateView;
    var _child;

    var RESET_MONTH = {
        December: 11,
        January: 0
    }

    function setChild(child) {
        _child = child
    }

    function setModel(model) {
        _dateModel = model;
    }

    function setView(view) {
        _headerDateView = view;
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
            style: "header",
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
        setModel: setModel,
        setView: setView,
        showHeaderDate: showHeaderDate,
        setChild: setChild
    }
})();