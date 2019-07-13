import getDateData, { IDateData } from '../store/date.data';

export default interface IHeaderModel {
    onClickPrevMonth(): void;
    onClickNextMonth(): void;
    getViewModel(): InputOptions;
}

type date = {
    tag: string,
    style: string,
    content: string,
}

type buttonPrev = {
    tag: string,
    style: string,
    content: string,
    id: string
}

type buttonNext = {
    tag: string,
    style: string,
    content: string,
    id: string
}

type InputOptions = {
    tag: string,
    style: string,
    id: string,
    parentId: string,
    date: date,
    buttonPrev: buttonPrev,
    buttonNext: buttonNext
}

class HeaderModel implements IHeaderModel {
    private _dateData: IDateData;
    private readonly _December = 11;
    private readonly _January = 0;
    
    constructor(data: IDateData) {
        this._dateData = data;
    }

    onClickPrevMonth(): void {
        this._dateData.decrementCurrentMonth();

        if (this._dateData.getCurrentMonth() == -1) {
            this._dateData.decrementCurrentYear();
            this._dateData.setCurrentMonth(this._December);
            this._dateData.getDayOfWeek();
        }
    }
    onClickNextMonth(): void {
        this._dateData.incrementCurrentMonth();

        if (this._dateData.getCurrentMonth() > this._December) {
            this._dateData.incrementCurrentYear();
            this._dateData.setCurrentMonth(this._January);
            this._dateData.getDayOfWeek();
        }
    }

    getViewModel(): InputOptions {
        return {
            tag: "header",
            style: "calendar__header",
            id: "js-headerDate",
            parentId: "js-calendar",
            date: {
                tag: "h1",
                style: "page__date",
                content: this._dateData.getMonthName() + " " + this._dateData.getCurrentYear(),
            },
            buttonPrev: {
                tag: "button",
                style: "button",
                content: "<",
                id: "js-buttonPrev",
            },
            buttonNext: {
                tag: "button",
                style: "button",
                content: ">",
                id: "js-buttonNext",
            }
        }
    }
}


export const getHeaderModel = () => new HeaderModel(getDateData);