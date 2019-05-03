var datesModel = (function (dateData) {
    var _dateData = dateData;
    
    // алгоритм для получения дат для всего календаря
    function getDates() {
        var DATES = {
            fiveRows: 35,
            sixRows: 42,
            correctWeekDay: 2
        }
        var dates = DATES.fiveRows;
        var datesArr = [];
        var prevMonthDay = _dateData.getPreviousMonthLastDay();
        var dayOfWeek = _dateData.getDayOfWeek();
        var currentMonthLastDay = _dateData.getCurrentMonthLastDay();
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

    function getViewModel() {
        var datesViewModel = {
            tag: "div",
            style: "calendar__dates",
            id: "js-dates",
            parentId: "js-calendar",
            dateOfWeek: _dateData.getDayOfWeek(),
            content: getDates(),
            currentMonthLastDay: _dateData.getCurrentMonthLastDay(_dateData.getCurrentYear, _dateData.getCurrentMonth()),
            currentDay: _dateData.getCurrentDate(),
            currentMonth: _dateData.getCurrentMonth(),
            currentYear: _dateData.getCurrentYear(),
            date: {
                style: "calendar__date_simple"
            },
            currentDate: {
                style: "calendar__date_current"
            },
            prevDate: {
                style: "calendar__date_prev"
            },
            nextDate: {
                style: "calendar__date_next"
            },
        }

        return datesViewModel;
    }

    return {
        getViewModel: getViewModel
    }
})(dateData, controllersObserver._getControllers);
