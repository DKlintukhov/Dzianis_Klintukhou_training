var headerDateComponent = (function() {
    var headerDate = document.createElement("h1");
    headerDate.id = "js-headerDate";
    headerDate.className = "date page__date";
    headerDate.appendChild(document.createTextNode(dateModel.getMonthName() + " " + dateModel.getCurrentYear()));
    return headerDate;
})();