var dateComponent = new Component()
    .setTag("span")
    .setClassName("calendar__date")
    .setContent(null)
    .setHandler(showWeatherController.weatherHandler)


dateModel.getDates(dateModel, dateComponent, datesNode);