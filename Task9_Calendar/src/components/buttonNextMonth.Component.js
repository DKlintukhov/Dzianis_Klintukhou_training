var buttonNextMonthComponent = (function() {
    var btnNext = document.createElement("button");
    btnNext.className = "button";
    btnNext.addEventListener("click", renderDatesController.nextDatesHandler);
    btnNext.appendChild(document.createTextNode(">"));
    return btnNext;
})();