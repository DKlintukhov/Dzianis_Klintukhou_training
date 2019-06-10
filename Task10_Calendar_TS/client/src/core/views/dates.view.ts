import getRender, {IRender} from "../renderDom";

export default interface IDatesView {
    render(viewModelL: any): void;
}

class DatesView implements IDatesView {
    constructor(render: IRender) {
        this._render = render;
    }

    private _render: IRender;

    private isCurrentDate(date: number, month: number, year: number): boolean {
        const _date = new Date();
        return _date.getDate() === date
            && _date.getMonth() === month
            && _date.getFullYear() === year
    }

    render(viewModel: any): void {
        const node = document.createElement(viewModel.tag);
        
        node.className = viewModel.style;
        node.id = viewModel.id;

        for (let index = 0, i = 1; index < viewModel.content.length; index++) {
            let date = document.createElement(viewModel.tag);
            let currentDate = this.isCurrentDate(viewModel.currentDay, viewModel.currentMonth, viewModel.currentYear);
            
            if (index + 1 < viewModel.dateOfWeek) {
                date.className = viewModel.date.style;
                date.classList.add(viewModel.prevDate.style);

            } else if (i > viewModel.currentMonthLastDay) {
                date.className = viewModel.date.style;
                date.classList.add(viewModel.nextDate.style);

            } else if (i === viewModel.currentDay && currentDate) {
                date.classList.add(viewModel.currentDate.style);
                i++;

            } else {
                date.className = viewModel.date.style;
                i++;
            }

            date.textContent = viewModel.content[index];
            node.appendChild(date);
        }

        this._render.isElemInDom(document.getElementById(viewModel.id), document.getElementById(viewModel.parentId));
        this._render.addToParent(viewModel.parentId, node, "beforeend");
    }
}

export const getDatesView = () => new DatesView(getRender);