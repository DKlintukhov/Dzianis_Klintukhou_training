var buttonPrevMonthComponent = new Component()
    .setTag("button")
    .setClassName("button")
    .setContent("<")
    .setHandler(newDatesPrevHandler)

var buttonNodeL = render.createNode(buttonPrevMonthComponent);

// функция для рендеринга новых дат
function newDatesPrevHandler() {
    dateModel.decrementCurrentMonth();
    if (dateModel.getCurrentMonth() == -1) {
        dateModel.decrementCurrentYear();
        dateModel.setCurrentMonth(11);
        dateModel.getDayOfWeek(dateModel.getCurrentMonth());
    }
    var h1 = document.querySelector("#js-headerComponent");

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
    var cal = getSelector("#js-calendar");
    cal.removeChild(root);
    render.addToHTML(calendarNode, "beforeEnd", datesNode);
}