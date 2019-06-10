import getRender, {IRender} from "../renderDom";

export interface IWeekView {
    render(WeekViewModel: any): void;
}

class WeekView implements IWeekView{
    constructor(render: IRender) {
        this._render = render;
    }

    private _render: IRender;

    render(weekViewModel: any): void {
        const node = document.createElement(weekViewModel.tag);

        node.className = weekViewModel.style;
        
        for (let index = 0; index < weekViewModel.content.length; index++) {
            var day = document.createElement(weekViewModel.day.tag);
            day.className = weekViewModel.day.style;
            day.textContent = weekViewModel.content[index];
            node.appendChild(day);
        }

        this._render.addToParent(weekViewModel.parentId, node, "beforeend");
    }
}

const getWeekView = new WeekView(getRender);
export default getWeekView;