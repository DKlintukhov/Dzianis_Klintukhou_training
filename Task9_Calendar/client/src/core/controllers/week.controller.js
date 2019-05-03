var weekController = (function (view, model) {
    var _weekView = view;
    var _weekModel = model;

    function showWeek() {
        _weekView.render(_weekModel.getViewModel());
    }

    return {
        showWeek: showWeek
    }
})(weekView, weekModel);