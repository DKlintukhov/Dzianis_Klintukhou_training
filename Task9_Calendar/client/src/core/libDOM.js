var libDOM = (function() {

    function addToParent(parentId, child, position) {
        var parent = document.getElementById(parentId);
        parent.insertAdjacentElement(position, child);
    }

    function isElemInDom(elem, parent) {
        if(elem) {
            parent.removeChild(elem);
        }
    }

    function isClassName(elem, className) {
        return elem.classList.contains(className);
    }

    function classToggle(elem, rmClass, addClass) {
        elem.classList.remove(rmClass);
        elem.classList.add(addClass);
    }

    return {
        isElemInDom: isElemInDom,
        isClassName: isClassName,
        addToParent: addToParent,
        classToggle: classToggle
    }
})();