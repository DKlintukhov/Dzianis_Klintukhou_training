import ICalendarModel, {getCalendarModel} from "../models/calendar.model";
import ICalendarView, {getCalendarView} from "../views/calendar.view";

class CalendarController {
    private _calendarView: ICalendarView;
    private _calendarModel: ICalendarModel;

    constructor(view: ICalendarView, model: ICalendarModel) {
        this._calendarModel = model;
        this._calendarView = view;
    }

    showCalendar(): void {
        this._calendarView.render(this._calendarModel.getViewModel());
    }
}

const getCalendarController = new CalendarController(getCalendarView(), getCalendarModel());
export default getCalendarController;