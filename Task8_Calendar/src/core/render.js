function Render() { }

// метод для добавления html node в родитель или в DOM
Render.prototype.addToHTML = function (parent, position, newElem) {
    parent.insertAdjacentElement(position, newElem);
}

// создания html node
Render.prototype.createNode = function (component) {
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

// глобальный обьект render
var render = new Render();
