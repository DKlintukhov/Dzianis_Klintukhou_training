var datesController = (function (view, model) {
    var _datesView = view;
    var _datesModel = model;

    function showDates() {
        _datesView.render(_datesModel.getViewModel());
    }
    
    return {
        showDates: showDates
    }

})(datesView, datesModel);

controllersObserver._getControllers.datesController = datesController;
controllersObserver.add(datesController.showDates);