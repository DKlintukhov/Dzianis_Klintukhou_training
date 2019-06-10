import IDatesModel, {getDatesModel} from '../models/dates.model';
import IDatesView, { getDatesView } from '../views/dates.view';

export interface IDatesController {
    showDates(): void;
}

class DatesController implements IDatesController {
    constructor(view: IDatesView, model: IDatesModel) {
        this._datesModel = model;
        this._datesView = view;
    }

    private _datesModel: IDatesModel;
    private _datesView: IDatesView;

    showDates(): void {
        this._datesView.render(this._datesModel.getViewModel());
    }
}

const getDatesController = new DatesController(getDatesView(), getDatesModel());
export default getDatesController;