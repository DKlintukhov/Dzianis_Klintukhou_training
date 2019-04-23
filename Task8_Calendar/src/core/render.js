var render = (function () {
    function addToHTML(parent, position, newElem) {
        parent.insertAdjacentElement(position, newElem);
    }

    function createNode(component) {
        var node = document.createElement(component.getTag());
        node.innerHTML = component.getContent();
        node.setAttribute(component.getAttributeName() || "id", component.getAttributeValue() || " ");
        node.className = component.getClassName();
        node.addEventListener("click", function (event) {
            this.event = event;
            component.getHandler();
            event.stopPropagation();
        }, false)

        return node;
    }

    return {
        addToHTML: addToHTML,
        createNode: createNode
    }
})()