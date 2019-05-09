var calendarView = (function () {

    function render(calendarViewModel) {
        var node = document.createElement(calendarViewModel.tag);
        node.className = calendarViewModel.style;
        node.id = calendarViewModel.id;

        libDOM.isElemInDom(document.getElementById(calendarViewModel.id), document.getElementById(calendarViewModel.parentId));
        libDOM.addToParent(calendarViewModel.parentId, node, "afterBegin");
    }

    return {
        render: render,
    }
})();