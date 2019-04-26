var dayOfWeekComponent = (function() {
    var dayOfWeek = document.createElement("span");
    dayOfWeek.className = "calendar__day";
    return dayOfWeek;
})();

library.appendsToParent(daysOfWeekComponent, dayOfWeekComponent, dateModel.getWeekDays(), "beforeEnd");