var headerDateController = (function (view, model, controllers) {
    var _headerDateView = view;
    var _headerModel = model;
    var _controllers = controllers;

    function onClickPrevMonth() {
        _headerModel.onClickPrevMonth();
        _controllers.datesController.showDates();
        _headerDateView.render(_headerModel.getViewModel());
    }

    function onClickNextMonth() {
        _headerModel.onClickNextMonth();
        _controllers.datesController.showDates();
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
})(headerDateView, headerDateModel, controllersObserver._getControllers);

controllersObserver._getControllers.headerDateController = headerDateController;
controllersObserver.add(headerDateController.showHeaderDate);
