import IHeaderModel, { getHeaderModel } from '../models/header.model';
import IHeaderView, { getHeaderView } from '../views/header.view';
import getDatesController from '../controllers/dates.controller';

export interface IHeaderController {
    onClickPrevMonth(): void;
    onClickNextMonth(): void;
    showHeaderDate(): void;
}

class HeaderController implements IHeaderController {

    constructor(view: IHeaderView, model: IHeaderModel) {
        this._headerModel = model;
        this._headerView = view;
    }

    private _headerModel: IHeaderModel;
    private _headerView: IHeaderView;

    onClickPrevMonth(): void {
        this._headerModel.onClickPrevMonth();
        getDatesController.showDates();
        this.showHeaderDate();
    }

    onClickNextMonth(): void {
        this._headerModel.onClickNextMonth();
        getDatesController.showDates();
        this.showHeaderDate();
    }

    showHeaderDate(): void {
        this._headerView.render(this._headerModel.getViewModel());
    }
}

const getHeaderController = new HeaderController(getHeaderView(), getHeaderModel());
export default getHeaderController;