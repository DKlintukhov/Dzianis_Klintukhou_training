window.addEventListener("load", function () {

    function getSecondsToTomorrow() {
        var now = new Date();
        var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
        var diff = tomorrow - now;
        return Math.round(diff / 1000);
    }

    var lastSecondsToTomorrow = getSecondsToTomorrow();
    calendarController.showCalendar();
    weekController.showWeek();

    controllersObserver.update();

    setInterval(function() {
        --lastSecondsToTomorrow;

        if(lastSecondsToTomorrow === 0) {
            calendarController.showCalendar();
            weekController.showWeek();
        
            controllersObserver.update();

            lastSecondsToTomorrow = getSecondsToTomorrow();
        }
    }, 1000);
});