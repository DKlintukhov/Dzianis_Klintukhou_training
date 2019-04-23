var dateModel = (function () {

    var _date = new Date();
    var _currentYear = _date.getFullYear();
    var _currentMonth = _date.getMonth();
    var _currentDate = _date.getDate();
    var _weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    var _dayOfWeek;
    var _monthArr = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ];

    function getDayOfWeek(currentMonth) {
        _date.setMonth(currentMonth);
        _date.setDate(1);
        _dayOfWeek = _date.getDay();
        return _dayOfWeek;
    }

    function getWeekDays() {
        return _weekDays;
    }

    function getCurrentYear() {
        return _currentYear;
    }

    function getCurrentMonth() {
        return _currentMonth;
    }

    function getCurrentDate() {
        return _currentDate;
    }

    function getPreviousMonthLastDay(currentYear, currentMonth) {
        return new Date(currentYear, currentMonth, 0).getDate();
    }

    function getCurrentMonthLastDay(currentYear, currentMonth) {
        return new Date(currentYear, currentMonth + 1, 0).getDate();
    }

    function getMonthName() {
        return _monthArr[getCurrentMonth()];
    }

    function decrementCurrentYear() {
        _currentYear -= 1;
        _date.setFullYear(_currentYear);
    }

    function decrementCurrentMonth() {
        _currentMonth -= 1;
    }

    function incrementCurrentMonth() {
        _currentMonth += 1;
    }

    function incrementCurrentYear() {
        _currentYear += 1;
        _date.setFullYear(_currentYear);
    }

    function setCurrentMonth(month) {
        _currentMonth = month;
    }

    // алгоритм для получения дат для всего календаря
    function getDates(dateModel, child, parent) {

        var DATES = {
            fiveRows: 35,
            sixRows: 42
        }

        var prevMonthDay = getPreviousMonthLastDay(getCurrentYear(), getCurrentMonth());

        var currentDate = getCurrentDate(getCurrentMonth());

        var dayOfWeek = getDayOfWeek(getCurrentMonth()) || 7;

        var currentMonthLastDay = getCurrentMonthLastDay(getCurrentYear(), getCurrentMonth());

        // узеаем до какой позиции заполнять датами предыдущего месяца
        prevMonthDay -= (getDayOfWeek(getCurrentMonth()) || 7) - 2;

        var dates = DATES.fiveRows;

        // проверка на переполнение
        if (currentMonthLastDay + dayOfWeek - 1 > DATES.fiveRows) {

            // добавляем ещё 6 ряд
            dates = DATES.sixRows;
        }

        for (let index = 1, i = 1; index <= dates; index++) {
            if (index == currentDate && library.isCurrentDate(dateModel)) {
                child.setContent(i).setClassName("calendar__date calendar__date_current");
                library.appendToParent(parent, child, "beforeEnd");
                i += 1;
            }
            else
                // если index находится на позиции дня недели текущего месяца, то заполняем обыными датами
                if (index >= dayOfWeek) {
                    child.setContent(i).setClassName("calendar__date");
                    library.appendToParent(parent, child, "beforeEnd");
                    i += 1;
                }

                // иначе заполняем датами предыдущего месяца
                else {
                    child.setContent(prevMonthDay).setClassName("calendar__date calendar__date_prev");
                    library.appendToParent(parent, child, "beforeEnd");
                    prevMonthDay++;
                }

            // если текущий месяц закончился
            if (i > currentMonthLastDay) {

                // заполняем следуюющим месяцем
                for (let day = 1; day <= dates - index; day++) {
                    child.setContent(day).setClassName("calendar__date calendar__date_next");
                    library.appendToParent(parent, child, "beforeEnd");
                }
                break;
            }
        }
    }

    return {
        getDayOfWeek: getDayOfWeek,
        getWeekDays: getWeekDays,
        getCurrentYear: getCurrentYear,
        getCurrentMonth: getCurrentMonth,
        getCurrentDate: getCurrentDate,
        getPreviousMonthLastDay: getPreviousMonthLastDay,
        getCurrentMonthLastDay: getCurrentMonthLastDay,
        getMonthName: getMonthName,
        decrementCurrentYear: decrementCurrentYear,
        decrementCurrentMonth: decrementCurrentMonth,
        incrementCurrentMonth: incrementCurrentMonth,
        incrementCurrentYear: incrementCurrentYear,
        setCurrentMonth: setCurrentMonth,
        getDates: getDates
    }
})()