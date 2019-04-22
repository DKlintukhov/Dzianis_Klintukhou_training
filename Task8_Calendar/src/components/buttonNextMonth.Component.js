var buttonNextMonthComponent = new Component()
    .setTag("button")
    .setClassName("button")
    .setContent(">")
    .setHandler(newDatesNextHandler)

var buttonNodeR = render.createNode(buttonNextMonthComponent);

// функция для рендеринга новых дат
function newDatesNextHandler() {
    dateModel.incrementCurrentMonth();

    if (dateModel.getCurrentMonth() > 11) {
        dateModel.incrementCurrentYear();
        dateModel.setCurrentMonth(0);
        dateModel.getDayOfWeek(dateModel.getCurrentMonth());
    }

    var h1 = document.querySelector("#js-headerComponent")

    h1.innerHTML = dateModel.getMonthName() + " " + dateModel.getCurrentYear();

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

    getDates(dateModel, dateComponent, datesNode);
    var root = getSelector("#js-dates");
    var cal = getSelector("#js-calendar")
    cal.removeChild(root)
    render.addToHTML(calendarNode, "beforeEnd", datesNode)
}