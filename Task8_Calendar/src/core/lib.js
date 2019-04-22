function inherit(parent, child) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

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
}

// проверка на текущую дату
function isCurrentDate(dateModel) {
    var _date = new Date();
    return _date.getDate() == dateModel.getCurrentDate()
        && _date.getMonth() == dateModel.getCurrentMonth()
        && _date.getFullYear() == dateModel.getCurrentYear()
}

// алгоритм для получения дат для всего календаря
function getDates(dateModel, child, parent) {

    var prevMonthDay = dateModel.getPreviousMonthLastDay(dateModel.getCurrentYear(), dateModel.getCurrentMonth());

    var currentDate = dateModel.getCurrentDate(dateModel.getCurrentMonth());

    var dayOfWeek = dateModel.getDayOfWeek(dateModel.getCurrentMonth()) || 7;
    console.log(dayOfWeek)
    var currentMonthLastDay = dateModel.getCurrentMonthLastDay(dateModel.getCurrentYear(), dateModel.getCurrentMonth());

    // узеаем до какой позиции заполнять датами предыдущего месяца
    prevMonthDay -= (dateModel.getDayOfWeek(dateModel.getCurrentMonth()) || 7) - 2;
    var dates = 35;

    // проверка на переполнение
    if(currentMonthLastDay + dayOfWeek > 35) {

        // добавляем ещё 6 ряд
        dates = 42;
    }

    for (let index = 1, i = 1; index <= dates; index++) {
        if (index == currentDate && isCurrentDate(dateModel)) {
            child.setContent(i).setClassName("calendar__date calendar__date_current");
            appendToParent(parent, child, "beforeEnd");
            i += 1;
        }
        else
            // если index находится на позиции дня недели текущего месяца, то заполняем обыными датами
            if (index >= dayOfWeek) {
                child.setContent(i).setClassName("calendar__date");
                appendToParent(parent, child, "beforeEnd");
                i += 1;
            }

            // иначе заполняем датами предыдущего месяца
            else {
                child.setContent(prevMonthDay).setClassName("calendar__date calendar__date_prev");
                appendToParent(parent, child, "beforeEnd");
                prevMonthDay++;
            }
        
        // если текущий месяц закончился
        if (i > currentMonthLastDay) {

            // заполняем следуюющим месяцем
            for (let day = 1; day <= dates - index; day++) {
                child.setContent(day).setClassName("calendar__date calendar__date_next");
                appendToParent(parent, child, "beforeEnd");
            }
            break;
        }
    }
}

