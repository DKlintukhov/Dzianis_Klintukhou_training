function DateModel() {
    this._date = new Date();
    this._currentYear = this._date.getFullYear();
    this._currentMonth = this._date.getMonth();
    this._currentDate = this._date.getDate();
    this._weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    this._dayOfWeek;
    this._monthArr = [
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

    this.getDayOfWeek = function (currentMonth) {
        this._date.setMonth(currentMonth);
        this._date.setDate(1);
        this._dayOfWeek = this._date.getDay();
        return this._dayOfWeek;
    }

    this.getWeekDays = function() {
        return this._weekDays;
    }

    this.getCurrentYear = function () {
        return this._currentYear;
    }

    this.getCurrentMonth = function () {
        return this._currentMonth;
    }

    this.getCurrentDate = function () {
        return this._currentDate;
    }

    this.getPreviousMonthLastDay = function (currentYear, currentMonth) {
        return new Date(currentYear, currentMonth, 0).getDate();
    }

    this.getCurrentMonthLastDay = function (currentYear, currentMonth) {
        return new Date(currentYear, currentMonth + 1, 0).getDate();
    }

    this.getMonthName = function () {
        return this._monthArr[this.getCurrentMonth()];
    }

    this.decrementCurrentYear = function () {
        this._currentYear -= 1;
        this._date.setFullYear(this._currentYear);
    }

    this.decrementCurrentMonth = function () {
        this._currentMonth -= 1;
    }

    this.incrementCurrentMonth = function () {
        this._currentMonth += 1;
    }

    this.incrementCurrentYear = function () {
        this._currentYear += 1;
        this._date.setFullYear(this._currentYear);
    }

    this.setCurrentMonth = function (month) {
        this._currentMonth = month;
    }
}

var dateModel = new DateModel();