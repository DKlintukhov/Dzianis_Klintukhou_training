var calendarController = (function (view) {
    var _calendarView = view;

    function showCalendar() {
        var calendarViewModel = {
            tag: "div",
            style: "calendar page__calendar",
            id: "js-calendar",
            parentId: "root"
        }

        _calendarView.render(calendarViewModel);
    }

    return {
        showCalendar: showCalendar,
    }
})(calendarView);
