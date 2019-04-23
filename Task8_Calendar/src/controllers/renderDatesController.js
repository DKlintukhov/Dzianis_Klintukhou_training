// контроллер для рендеринга новых дат
var renderDatesController = (function () {

    function nextDatesHandler() {

        dateModel.incrementCurrentMonth();
        if (dateModel.getCurrentMonth() > 11) {
            dateModel.incrementCurrentYear();
            dateModel.setCurrentMonth(0);
            dateModel.getDayOfWeek(dateModel.getCurrentMonth());
        }

        renderDates();
    }

    function prevDatesHandler() {

        dateModel.decrementCurrentMonth();
        if (dateModel.getCurrentMonth() == -1) {
            dateModel.decrementCurrentYear();
            dateModel.setCurrentMonth(11);
            dateModel.getDayOfWeek(dateModel.getCurrentMonth());
        }

        renderDates();
    }

    function renderDates() {
        var datesComponent = new Component()
            .setTag("div")
            .setAttributeName("id")
            .setAttributeValue("js-dates")
            .setClassName("calendar__dates")
            .setContent(null)

        var datesNode = render.createNode(datesComponent);

        var dateComponent = new Component()
            .setTag("span")
            .setClassName("calendar__date")

        dateModel.getDates(dateModel, dateComponent, datesNode);

        var domNode = library.getSelector("#js-headerComponent");

        domNode.innerHTML = dateModel.getMonthName() + " " + dateModel.getCurrentYear();

        var child = library.getSelector("#js-dates");
        var parent = library.getSelector("#js-calendar");
        parent.removeChild(child);
        render.addToHTML(calendarNode, "beforeEnd", datesNode);
    }

    return {
        nextDatesHandler: nextDatesHandler,
        prevDatesHandler: prevDatesHandler
    }
})()