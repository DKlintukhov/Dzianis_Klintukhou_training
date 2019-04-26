var buttonCloseComponent = (function() {
    var closeSymbol = '\u2715';
    var bntClose = document.createElement("button");
    bntClose.className = "button-close";
    bntClose.appendChild(document.createTextNode(closeSymbol));
    bntClose.addEventListener("click", showWeatherController.closeWeather, false);
    return bntClose;
})();