var dateComponent = new Component()
    .setTag("span")
    .setClassName("calendar__date")
    .setContent(null)
    .setHandler(weatherHandler)


getDates(dateModel, dateComponent, datesNode);

function weatherHandler() {
    console.log("get Weather");
    console.log(this.event);
}