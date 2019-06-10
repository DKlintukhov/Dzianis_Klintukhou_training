import getRender, {IRender} from "../renderDom";

export default interface ICalendarView {
    render(calendarViewModel: any): void;
}

class CalendarView implements ICalendarView{
    constructor(render: IRender) {
        this._render = render;
    }
    private _render: IRender;
    render(calendarViewModel: any): void {
        const node = document.createElement(calendarViewModel.tag);
        node.className = calendarViewModel.style;
        node.id = calendarViewModel.id;

        this._render.isElemInDom(document.getElementById(calendarViewModel.id), document.getElementById(calendarViewModel.parentId));
        
        this._render.addToParent(calendarViewModel.parentId, node, "afterbegin");
    }
}

export const getCalendarView = () => new CalendarView(getRender);