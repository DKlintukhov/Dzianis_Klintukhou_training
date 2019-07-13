import getWeekView, { IWeekView } from "../views/week.view";
import getWeekModel, { IWeekModel } from "../models/week.model";

class WeekController {
    private _weekView: IWeekView;
    private _weekModel: IWeekModel;

    constructor(view: IWeekView, model: IWeekModel) {
        this._weekModel = model;
        this._weekView = view;
    }

    showWeek(): void {
        this._weekView.render(this._weekModel.getViewModel());
    }
}

const getWeekController = new WeekController(getWeekView, getWeekModel);
export default getWeekController;