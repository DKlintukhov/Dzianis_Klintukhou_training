// контроллер для рендеринга новых дат
var renderDatesController = (function () {

    var MONTHS = {
        December: 11,
        January: 0
    }

    function nextDatesHandler() {
        dateModel.incrementCurrentMonth();
        if (dateModel.getCurrentMonth() > MONTHS.December) {
            dateModel.incrementCurrentYear();
            dateModel.setCurrentMonth(MONTHS.January);
            dateModel.getDayOfWeek(dateModel.getCurrentMonth());
        }

        renderDates();
        renderCurrentDate();
    }

    function prevDatesHandler() {
        dateModel.decrementCurrentMonth();
        if (dateModel.getCurrentMonth() == -1) {
            dateModel.decrementCurrentYear();
            dateModel.setCurrentMonth(MONTHS.December);
            dateModel.getDayOfWeek(dateModel.getCurrentMonth());
        }

        renderDates();
        renderCurrentDate();
    }

    function renderDates() {

        var datesComponent = (function() {
            var dates = document.createElement("div");
            dates.className = "calendar__dates";
            dates.id = "js-dates";
            dates.addEventListener("click", showWeatherController.weatherHandler);
            return dates;
        })();

        var dateComponent = (function() {
            var date = document.createElement("span");
            date.className = "calendar__date";
            return date;
        })();

        dateModel.getDates(dateModel, dateComponent, datesComponent);
        var child = library.getSelector("#js-dates");
        var parent = library.getSelector("#js-calendar");
        parent.removeChild(child);
        calendarComponent.insertAdjacentElement("beforeEnd", datesComponent);
    }

    function renderCurrentDate() {
        var domNode = library.getSelector("#js-headerDate");
        domNode.innerHTML = dateModel.getMonthName() + " " + dateModel.getCurrentYear();
    }

    return {
        nextDatesHandler: nextDatesHandler,
        prevDatesHandler: prevDatesHandler
    }
})();