window.addEventListener("load", function () {
    var lastSecondsToTomorrow = lib.getSecondsToTomorrow();
    calendarController.showCalendar();
    weekController.showWeek();

    controllersObserver.update();

    setInterval(function() {
        --lastSecondsToTomorrow;

        if(lastSecondsToTomorrow === 0) {
            calendarController.showCalendar();
            weekController.showWeek();
        
            controllersObserver.update();

            lastSecondsToTomorrow = lib.getSecondsToTomorrow();
        }
    }, 1000);
});