import getDateData, {IDateData} from '../store/date.data';

export interface IWeekModel {
    getViewModel(): any;
}

type day = {
    tag: string,
    style: string
}

type InputOptions = {
    tag: string,
    style: string,
    parentId: string,
    content: string[],
    day: day
}

class WeekModel implements IWeekModel {
    constructor(data: IDateData) {
        this._dateData = data;
    }

    private _dateData: IDateData;

    getViewModel(): InputOptions {
        return {
            tag: "div",
            style: "calendar__days",
            parentId: "js-calendar",
            content: this._dateData.getWeekDays(),
            day: {
                tag: "div",
                style: "calendar__day"
            }
        }
    }
}

const getWeekModel = new WeekModel(getDateData);
export default getWeekModel;