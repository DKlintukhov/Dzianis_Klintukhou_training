var weatherDialogBoxView = (function (controllers) {

    function render(weatherViewModel) {
        var node = document.createElement(weatherViewModel.tag);
        var buttonClose = document.createElement(weatherViewModel.buttonClose.tag);

        node.className = weatherViewModel.style;
        node.id = weatherViewModel.id;

        buttonClose.className = weatherViewModel.buttonClose.style;
        buttonClose.textContent = weatherViewModel.buttonClose.content;
        buttonClose.addEventListener("click", controllers.weatherDialogBoxController.onClickWeather);

        node.appendChild(buttonClose);

        libDOM.isElemInDom(document.getElementById(weatherViewModel.id), document.getElementById(weatherViewModel.parentId));
        libDOM.addToParent(weatherViewModel.parentId, node, "beforeEnd");
    }

    return {
        render: render
    }
})(controllersObserver._getControllers);