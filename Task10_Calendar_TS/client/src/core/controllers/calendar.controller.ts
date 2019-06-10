import ICalendarModel, {getCalendarModel} from "../models/calendar.model";
import ICalendarView, {getCalendarView} from "../views/calendar.view";

class CalendarController {
    constructor(view: ICalendarView, model: ICalendarModel) {
        this._calendarModel = model;
        this._calendarView = view;
    }

    private _calendarView: ICalendarView;
    private _calendarModel: ICalendarModel;

    showCalendar(): void {
        this._calendarView.render(this._calendarModel.getViewModel());
    }
}

const getCalendarController = new CalendarController(getCalendarView(), getCalendarModel());
export default getCalendarController;