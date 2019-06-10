import getDateData, {IDateData} from '../store/date.data';

export default interface IDatesModel {
    getViewModel(): any;
}

type date = {
    style: string
}

type currentDate = {
    style: string
}

type prevDate = {
    style: string
}

type nextDate = {
    style: string
}

type InputOptions = {
    tag: string,
    style: string,
    id: string,
    parentId: string,
    dateOfWeek: number,
    content: Array<number>,
    currentMonthLastDay: number,
    currentDay: number,
    currentMonth: number,
    currentYear: number,
    date: date,
    currentDate: currentDate,
    prevDate: prevDate,
    nextDate: nextDate
}

class DatesModel implements IDatesModel {
    constructor(data: IDateData) {
        this._dateData = data;
    }

    private _dateData: IDateData;

    private getDates(): number[] {
        enum DATES  {
            fiveRows = 35,
            sixRows = 42,
            correctWeekDay = 2
        }
        let dates: number = DATES.fiveRows;
        let datesArr: number[] = [];
        let prevMonthDay: number = this._dateData.getPreviousMonthLastDay();
        let dayOfWeek: number = this._dateData.getDayOfWeek();
        let currentMonthLastDay: number = this._dateData.getCurrentMonthLastDay();
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

    getViewModel(): InputOptions {
        return {
            tag: "div",
            style: "calendar__dates",
            id: "js-dates",
            parentId: "js-calendar",
            dateOfWeek: this._dateData.getDayOfWeek(),
            content: this.getDates(),
            currentMonthLastDay: this._dateData.getCurrentMonthLastDay(),
            currentDay: this._dateData.getCurrentDate(),
            currentMonth: this._dateData.getCurrentMonth(),
            currentYear: this._dateData.getCurrentYear(),
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
    }
}

export const getDatesModel = () => new DatesModel(getDateData);