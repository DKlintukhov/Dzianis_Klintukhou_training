var library = (function () {

    function getSelector(selector) {
        return document.querySelector(selector);
    }

    // создать массив html node и добавить в родитель по позиции
    function appendsToParent(parent, child, values, position) {
        for (let index = 0; index < values.length; index++) {
            var child = (function() {
                var date = document.createElement("span");
                date.className = "calendar__day";
                date.appendChild(document.createTextNode(values[index]));
                return date;
            })();
            parent.insertAdjacentElement(position, child);
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
        appendsToParent: appendsToParent,
        isCurrentDate: isCurrentDate
    }
})();