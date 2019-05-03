var calendarModel = (function () {

    function getViewModel() {
        var calendarViewModel = {
            tag: "div",
            style: "calendar page__calendar",
            id: "js-calendar",
            parentId: "root"
        }

        return calendarViewModel;
    }

    return {
        getViewModel: getViewModel,
    }
})();
