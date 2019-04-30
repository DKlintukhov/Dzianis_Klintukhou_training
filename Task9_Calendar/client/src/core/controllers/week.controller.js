var weekController = (function() {
    var _weekView;
    var _weekModel;

    function setView(view) {
        _weekView = view;
    }

    function setModel(model) {
        _weekModel = model;
    }
    
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
        setView: setView,
        setModel: setModel,
        showWeek: showWeek
    }
})();