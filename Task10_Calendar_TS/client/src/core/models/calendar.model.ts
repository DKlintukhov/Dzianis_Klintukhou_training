export default interface ICalendarModel {
    getViewModel(): any;
}

type InputOptions = {
    tag: string,
    style: string,
    id: string,
    parentId: string
}

class CalendarModel implements ICalendarModel {
    getViewModel(): InputOptions {
        return {
            tag: "div",
            style: "calendar page__calendar",
            id: "js-calendar",
            parentId: "root"
        }
    }
}


export const getCalendarModel = () => new CalendarModel();