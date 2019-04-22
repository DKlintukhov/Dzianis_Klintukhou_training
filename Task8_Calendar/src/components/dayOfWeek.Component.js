var dayOfWeekComponent = new Component()
    .setTag("span")
    .setId("js-dayOfWeek")
    .setClassName("calendar__day")

appendsToParent(daysOfWeekNode, dayOfWeekComponent, dateModel.getWeekDays(), "beforeEnd");