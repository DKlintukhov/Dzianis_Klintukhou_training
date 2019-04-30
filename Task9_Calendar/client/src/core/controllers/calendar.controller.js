var calendarController = (function() {
    var _calendarView;

    function setView(view) {
        _calendarView = view;
    }
    
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
        setView: setView,
        showCalendar: showCalendar,
    }
})();