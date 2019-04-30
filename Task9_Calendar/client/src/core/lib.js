var lib = (function() {

    function isCurrentDate(date, month, year) {
        var _date = new Date();
        return _date.getDate() === date
            && _date.getMonth() === month
            && _date.getFullYear() === year
    }

    function addToParent(parentId, child, position) {
        var parent = document.getElementById(parentId);
        parent.insertAdjacentElement(position, child);
    }

    function isElemInDom(elem, parent) {
        if(elem) {
            parent.removeChild(elem);
        }
    }

    function isClassName(elem, className, callback) {
        if (elem.classList.contains(className)) {
            callback();
        }
    }

    function classToggle(elem, rmClass, addClass) {
        elem.classList.remove(rmClass);
        elem.classList.add(addClass);
    }

    return {
        isCurrentDate: isCurrentDate,
        isElemInDom: isElemInDom,
        isClassName: isClassName,
        addToParent: addToParent,
        classToggle: classToggle
    }

})();