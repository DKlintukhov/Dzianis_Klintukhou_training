window.addEventListener("load", function () {
    var lastSecondsToTomorrow = lib.getSecondsToTomorrow();
    
    calendarController.showCalendar();
    headerDateController.showHeaderDate();
    weekController.showWeek();
    datesController.showDates();
    weatherDialogBoxController.showWeatherDialogBox();
    weatherController.showWeatherWithData();

    setInterval(function() {
        --lastSecondsToTomorrow;

        if(lastSecondsToTomorrow === 0) {
            calendarController.showCalendar();
            headerDateController.showHeaderDate();
            weekController.showWeek();
            datesController.showDates();
            weatherDialogBoxController.showWeatherDialogBox();
            weatherController.showWeatherWithData();

            lastSecondsToTomorrow = lib.getSecondsToTomorrow();
        }
    }, 1000);
});