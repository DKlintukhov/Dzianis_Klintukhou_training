var weekModel = (function (dateData) {
    var _dateData = dateData;

    function getViewModel() {
        var weekViewModel = {
            tag: "div",
            style: "calendar__days",
            parentId: "js-calendar",
            content: _dateData.getWeekDays(),
            day: {
                tag: "div",
                style: "calendar__day"
            }
        }

        return weekViewModel;
    }

    return {
        getViewModel: getViewModel
    }
})(dateData);