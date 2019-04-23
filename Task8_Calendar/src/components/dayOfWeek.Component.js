var dayOfWeekComponent = new Component()
    .setTag("span")
    .setClassName("calendar__day")

library.appendsToParent(daysOfWeekNode, dayOfWeekComponent, dateModel.getWeekDays(), "beforeEnd");