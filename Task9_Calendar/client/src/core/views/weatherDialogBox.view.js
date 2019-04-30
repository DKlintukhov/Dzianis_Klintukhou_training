var weatherDialogBoxView = (function () {

    function render(weatherViewModel) {
        
        var node = document.createElement(weatherViewModel.tag);
        var buttonClose = document.createElement(weatherViewModel.buttonClose.tag);
        var currentMonth = weatherViewModel.currentMonth;

        node.className = weatherViewModel.style;
        node.id = weatherViewModel.id;

        buttonClose.className = weatherViewModel.buttonClose.style;
        buttonClose.textContent = weatherViewModel.buttonClose.content;
        buttonClose.addEventListener(weatherViewModel.buttonClose.handler.event, weatherViewModel.buttonClose.handler.func);
        
        var MONTHS_RANGE = {
            November: 10,
            March: 2,
            February: 1,
            June: 5,
            May: 4,
            September: 8,
            August: 7,
            December: 11
        }

        if (currentMonth > MONTHS_RANGE.November || currentMonth < MONTHS_RANGE.March) {
            node.classList.add(weatherViewModel.bgWinter);
        }

        if (currentMonth > MONTHS_RANGE.February && currentMonth < MONTHS_RANGE.June) {
            node.classList.add(weatherViewModel.bgSpring);
        }

        if (currentMonth > MONTHS_RANGE.May && currentMonth < MONTHS_RANGE.September) {
            node.classList.add(weatherViewModel.bgSummer);
        }

        if (currentMonth > MONTHS_RANGE.August && currentMonth < MONTHS_RANGE.December) {
            node.classList.add(weatherViewModel.bgAutumn);
        }

        node.appendChild(buttonClose);

        lib.isElemInDom(document.getElementById(weatherViewModel.id), document.getElementById(weatherViewModel.parentId));
        lib.addToParent(weatherViewModel.parentId, node, "beforeEnd");
    }

    return {
        render: render
    }
})();