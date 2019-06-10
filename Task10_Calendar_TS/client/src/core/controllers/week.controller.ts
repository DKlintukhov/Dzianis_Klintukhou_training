import getWeekView, { IWeekView } from "../views/week.view";
import getWeekModel, { IWeekModel } from "../models/week.model";

class WeekController {
    constructor(view: IWeekView, model: IWeekModel) {
        this._weekModel = model;
        this._weekView = view;
    }

    private _weekView: IWeekView;
    private _weekModel: IWeekModel;

    showWeek(): void {
        this._weekView.render(this._weekModel.getViewModel());
    }
}

const getWeekController = new WeekController(getWeekView, getWeekModel);
export default getWeekController;