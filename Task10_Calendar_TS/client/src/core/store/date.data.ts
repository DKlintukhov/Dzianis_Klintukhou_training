export interface IDateData {
    getDayOfWeek(): number;
    getWeekDays(): string[];
    getCurrentMonth(): number;
    getCurrentDate(): number;
    getMonthName(): string;
    getCurrentMonthLastDay(): number;
    getPreviousMonthLastDay(): number;
    getCurrentYear(): number;
    setCurrentMonth(month: number): void;
    decrementCurrentYear(): void;
    incrementCurrentYear(): void;
    decrementCurrentMonth(): void;
    incrementCurrentMonth(): void;
}

class DateData implements IDateData {
    private _date = new Date();
    private _currentDate: number = this._date.getDate();
    private _currentYear: number = this._date.getFullYear();
    private _currentMonth: number = this._date.getMonth();
    private _weekDays: string[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    private _monthArr: string[] = 
    [
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
    private _dayOfWeek: number;

    getDayOfWeek(): number {
        this._date.setMonth(this._currentMonth);
        this._date.setDate(1);
        this._dayOfWeek = this._date.getDay();
        return this._dayOfWeek || 7;
    }

    getWeekDays(): string[] {
        return this._weekDays;
    }

    getCurrentMonth(): number {
        return this._currentMonth;
    }

    getCurrentYear(): number {
        return this._currentYear;
    }

    getCurrentDate(): number {
        return this._currentDate;
    }

    getPreviousMonthLastDay(): number {
        return new Date(this._currentYear, this._currentMonth, 0).getDate();
    }

    getCurrentMonthLastDay(): number {
        return new Date(this._currentYear, this._currentMonth + 1, 0).getDate();
    }

    getMonthName(): string {
        return this._monthArr[this.getCurrentMonth()];
    }

    setCurrentMonth(month: number): void {
        this._currentMonth = month;
    }

    decrementCurrentYear(): void {
        this._currentYear -= 1;
        this._date.setFullYear(this._currentYear);
    }

    incrementCurrentYear(): void {
        this._currentYear += 1;
        this._date.setFullYear(this._currentYear);
    }

    decrementCurrentMonth(): void {
        this._currentMonth -= 1;
    }

    incrementCurrentMonth(): void {
        this._currentMonth += 1;
    }
}

const getDateData = new DateData();
export default getDateData;