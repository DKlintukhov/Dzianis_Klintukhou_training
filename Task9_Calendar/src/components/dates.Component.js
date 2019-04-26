var datesComponent = (function() {
    var dates = document.createElement("div");
    dates.className = "calendar__dates";
    dates.id = "js-dates";
    dates.addEventListener("click", showWeatherController.weatherHandler);
    return dates;
})();