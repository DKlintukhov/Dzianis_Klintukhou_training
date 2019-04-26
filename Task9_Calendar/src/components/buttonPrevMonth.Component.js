var buttonPrevMonthComponent = (function() {
    var btnPrev = document.createElement("button");
    btnPrev.className = "button";
    btnPrev.addEventListener("click", renderDatesController.prevDatesHandler);
    btnPrev.appendChild(document.createTextNode("<"));
    return btnPrev;
})();