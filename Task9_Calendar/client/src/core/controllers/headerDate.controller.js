var headerDateController = (function (view, model, controllers) {
    var _headerDateView = view;
    var _headerModel = model;

    function onClickPrevMonth() {
        _headerModel.onClickPrevMonth();
        controllers.datesController.showDates();
        _headerDateView.render(_headerModel.getViewModel());
    }

    function onClickNextMonth() {
        _headerModel.onClickNextMonth();
        controllers.datesController.showDates();
        _headerDateView.render(_headerModel.getViewModel());
    }

    function showHeaderDate() {
        _headerDateView.render(_headerModel.getViewModel());
    }

    return {
        onClickPrevMonth: onClickPrevMonth,
        onClickNextMonth: onClickNextMonth,
        showHeaderDate: showHeaderDate
    }
})(headerDateView, headerDateModel, controllers);

controllers.headerDateController = headerDateController
