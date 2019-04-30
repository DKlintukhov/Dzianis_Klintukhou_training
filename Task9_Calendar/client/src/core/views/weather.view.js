var weatherView = (function () {
    
    function render(weatherViewModel) {
        var node = document.createElement(weatherViewModel.tag);
        node.className = weatherViewModel.style;
        node.textContent = weatherViewModel.content;
        node.id = weatherViewModel.id;

        lib.isElemInDom(document.getElementById(weatherViewModel.id), document.getElementById(weatherViewModel.parentId));
        lib.addToParent(weatherViewModel.parentId, node, "beforeEnd");
    }

    return {
        render: render
    }
})();