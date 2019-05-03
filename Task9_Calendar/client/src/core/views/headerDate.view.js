var headerDateView = (function (controllers) {
 
    function render(headerDateViewModel) {
        var node = document.createElement(headerDateViewModel.tag);
        var buttonPrev = document.createElement(headerDateViewModel.buttonPrev.tag);
        var buttonNext = document.createElement(headerDateViewModel.buttonNext.tag);
        var date = document.createElement(headerDateViewModel.date.tag);
        date.className = headerDateViewModel.date.style;
        date.textContent = headerDateViewModel.date.content;

        buttonPrev.className = headerDateViewModel.buttonPrev.style;
        buttonPrev.id = headerDateViewModel.buttonPrev.id;
        buttonPrev.textContent = headerDateViewModel.buttonPrev.content;

        node.appendChild(buttonPrev);
        node.className = headerDateViewModel.style;
        node.id = headerDateViewModel.id;
        node.appendChild(date);

        buttonNext.className = headerDateViewModel.buttonNext.style;
        buttonNext.id = headerDateViewModel.buttonNext.id;
        buttonNext.textContent = headerDateViewModel.buttonNext.content;

        node.appendChild(buttonNext);

        lib.isElemInDom(document.getElementById(headerDateViewModel.id), document.getElementById(headerDateViewModel.parentId));
        lib.addToParent(headerDateViewModel.parentId, node, "afterBegin");

        buttonPrev.addEventListener("click", controllers.headerDateController.onClickPrevMonth);
        buttonNext.addEventListener("click", controllers.headerDateController.onClickNextMonth);
    }

    return {
        render: render
    }
})(controllers);