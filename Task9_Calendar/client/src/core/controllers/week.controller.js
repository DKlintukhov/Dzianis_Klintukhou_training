var weekController = (function (view, model) {
    var _weekView = view;
    var _weekModel = model;

    function showWeek() {
        var weekViewModel = {
            tag: "div",
            style: "calendar__days",
            parentId: "js-calendar",
            content: _weekModel.getWeekDays(),
            day: {
                tag: "div",
                style: "calendar__day"
            }
        }

        _weekView.render(weekViewModel);
    }

    return {
        showWeek: showWeek
    }
})(weekView, dateModel);
