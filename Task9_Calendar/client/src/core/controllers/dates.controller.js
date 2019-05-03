var datesController = (function (view, model) {
    var _datesView = view;
    var _datesModel = model;

    function onClickClose() {
        console.log("close")
    }

    function showDates() {
        _datesView.render(_datesModel.getViewModel());
    }
    
    return {
        onClickClose: onClickClose,
        showDates: showDates
    }
})(datesView, datesModel, controllers);

controllers.datesController = datesController;