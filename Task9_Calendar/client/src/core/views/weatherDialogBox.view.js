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

        lib.isSeason(
            node, currentMonth, 
            weatherViewModel.bgSpring, 
            weatherViewModel.bgWinter,
            weatherViewModel.bgSummer,
            weatherViewModel.bgAutumn);

        node.appendChild(buttonClose);

        lib.isElemInDom(document.getElementById(weatherViewModel.id), document.getElementById(weatherViewModel.parentId));
        lib.addToParent(weatherViewModel.parentId, node, "beforeEnd");
    }

    return {
        render: render
    }
})();