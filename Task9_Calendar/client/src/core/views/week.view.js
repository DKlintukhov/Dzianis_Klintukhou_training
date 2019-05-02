var weekView = (function () {

    function render(weekViewModel) {
        var node = document.createElement(weekViewModel.tag);

        node.className = weekViewModel.style;
        
        for (let index = 0; index < weekViewModel.content.length; index++) {
            var day = document.createElement(weekViewModel.day.tag);
            day.className = weekViewModel.day.style;
            day.textContent = weekViewModel.content[index];
            node.appendChild(day);
        }

        lib.addToParent(weekViewModel.parentId, node, "beforeEnd");
    }

    return {
        render: render
    }
})();