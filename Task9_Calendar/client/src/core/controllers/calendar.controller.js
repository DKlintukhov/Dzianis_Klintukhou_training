var calendarController = (function (view, model) {
    var _calendarView = view;
    var _calendarModel = model;

    function showCalendar() {
        _calendarView.render(_calendarModel.getViewModel());
    }

    return {
        showCalendar: showCalendar,
    }
    
})(calendarView, calendarModel);