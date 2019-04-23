var library = (function () {

    function getSelector(selector) {
        return document.querySelector(selector);
    }
    // создать html node и добавить в родитель по позиции
    function appendToParent(parent, child, position) {
        var childNode = render.createNode(child);
        render.addToHTML(parent, position, childNode);
        return childNode;
    }

    // создать массив html node и добавить в родитель по позиции
    function appendsToParent(parent, child, values, position) {
        for (let index = 0; index < values.length; index++) {
            child.setContent(values[index]);
            appendToParent(parent, child, position);
        }
        return parent;
    }

    // проверка на текущую дату
    function isCurrentDate(dateModel) {
        var _date = new Date();
        return _date.getDate() == dateModel.getCurrentDate()
            && _date.getMonth() == dateModel.getCurrentMonth()
            && _date.getFullYear() == dateModel.getCurrentYear()
    }

    return {
        getSelector: getSelector,
        appendToParent: appendToParent,
        appendsToParent: appendsToParent,
        isCurrentDate: isCurrentDate,
    }
})()