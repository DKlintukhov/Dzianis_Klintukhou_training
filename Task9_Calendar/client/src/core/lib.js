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

    function isSeason(node, currentMonth, bgSpring, bgWinter, bgSummer, bgAutumn) {
        var MONTHS_RANGE = {
            November: 10,
            March: 2,
            February: 1,
            June: 5,
            May: 4,
            September: 8,
            August: 7,
            December: 11
        }

        if (currentMonth > MONTHS_RANGE.November || currentMonth < MONTHS_RANGE.March) {
            node.classList.add(bgWinter);
            return;
        }

        if (currentMonth > MONTHS_RANGE.February && currentMonth < MONTHS_RANGE.June) {
            node.classList.add(bgSpring);
            return;
        }

        if (currentMonth > MONTHS_RANGE.May && currentMonth < MONTHS_RANGE.September) {
            node.classList.add(bgSummer);
            return;
        }

        if (currentMonth > MONTHS_RANGE.August && currentMonth < MONTHS_RANGE.December) {
            node.classList.add(bgAutumn);
            return;
        }
    }

    function getSecondsToTomorrow() {
        var now = new Date();
        var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
        var diff = tomorrow - now;
        return Math.round(diff / 1000);
    }

    return {
        isCurrentDate: isCurrentDate,
        isElemInDom: isElemInDom,
        isClassName: isClassName,
        isSeason: isSeason,
        addToParent: addToParent,
        classToggle: classToggle,
        getSecondsToTomorrow: getSecondsToTomorrow
    }
})();