var dateComponent = (function () {
    var date = document.createElement("span");
    date.className = "calendar__date";
    return date;
})();

dateModel.getDates(dateModel, dateComponent, datesComponent);