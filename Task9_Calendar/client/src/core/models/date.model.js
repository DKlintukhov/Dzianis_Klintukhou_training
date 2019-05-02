var dateModel = (function () {
    var _date = new Date();
    var _currentYear = _date.getFullYear();
    var _currentMonth = _date.getMonth();
    var _currentDate = _date.getDate();
    var _dayOfWeek;
    var _weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
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

    function getDayOfWeek() {
        _date.setMonth(_currentMonth);
        _date.setDate(1);
        _dayOfWeek = _date.getDay();
        return _dayOfWeek || 7;
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

    function getPreviousMonthLastDay() {
        return new Date(_currentYear, _currentMonth, 0).getDate();
    }

    function getCurrentMonthLastDay() {
        return new Date(_currentYear, _currentMonth + 1, 0).getDate();
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
    function getDates() {
        var DATES = {
            fiveRows: 35,
            sixRows: 42,
            correctWeekDay: 2
        }
        var dates = DATES.fiveRows;
        var datesArr = [];
        var prevMonthDay = getPreviousMonthLastDay();
        var dayOfWeek = getDayOfWeek();
        var currentMonthLastDay = getCurrentMonthLastDay();
        // узеаем до какой позиции заполнять датами предыдущего месяца
        prevMonthDay -= dayOfWeek - DATES.correctWeekDay;

        // проверка на переполнение
        if (currentMonthLastDay + dayOfWeek - 1 > DATES.fiveRows) {
            // добавляем ещё 6 ряд
            dates = DATES.sixRows;
        }

        for (let index = 1, i = 1; index <= dates; index++) {
            // если index находится на позиции дня недели текущего месяца, то заполняем обыными датами
            if (index >= dayOfWeek) {
                datesArr.push(i);
                i += 1;
            }
            // иначе заполняем датами предыдущего месяца
            else {
                datesArr.push(prevMonthDay);
                prevMonthDay++;
            }
            // если текущий месяц закончился
            if (i > currentMonthLastDay) {
                // заполняем следуюющим месяцем
                for (let day = 1; day <= dates - index; day++) {
                    datesArr.push(day);
                }
                break;
            }
        }

        return datesArr;
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
})();
