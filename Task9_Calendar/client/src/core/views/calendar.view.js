var calendarView = (function () {

    function render(calendarViewModel) {
        var node = document.createElement(calendarViewModel.tag);
        node.className = calendarViewModel.style;
        node.id = calendarViewModel.id;

        lib.isElemInDom(document.getElementById(calendarViewModel.id), document.getElementById(calendarViewModel.parentId));
        lib.addToParent(calendarViewModel.parentId, node, "afterBegin");
    }

    return {
        render: render,
    }
})();