import render, {IRender} from "../renderDom";
import getHeaderController from "../controllers/header.controller";

export default interface IHeaderView {
    render(viewModelL: any): void;
}

class HeaderView implements IHeaderView {
    private _render: IRender;
    
    constructor(render: IRender) {
        this._render = render;
    }
    
    render(viewModel: any): void {
        const node = document.createElement(viewModel.tag);
        const buttonPrev = document.createElement(viewModel.buttonPrev.tag);
        const buttonNext = document.createElement(viewModel.buttonNext.tag);
        const date = document.createElement(viewModel.date.tag);
        date.className = viewModel.date.style;
        date.textContent = viewModel.date.content;

        buttonPrev.className = viewModel.buttonPrev.style;
        buttonPrev.id = viewModel.buttonPrev.id;
        buttonPrev.textContent = viewModel.buttonPrev.content;

        node.appendChild(buttonPrev);
        node.className = viewModel.style;
        node.id = viewModel.id;
        node.appendChild(date);

        buttonNext.className = viewModel.buttonNext.style;
        buttonNext.id = viewModel.buttonNext.id;
        buttonNext.textContent = viewModel.buttonNext.content;

        node.appendChild(buttonNext);

        this._render.isElemInDom(document.getElementById(viewModel.id), document.getElementById(viewModel.parentId));
        this._render.addToParent(viewModel.parentId, node, "afterbegin");

        buttonPrev.addEventListener("click", () => getHeaderController.onClickPrevMonth());
        buttonNext.addEventListener("click", () => getHeaderController.onClickNextMonth());
    }
}

export const getHeaderView = () => new HeaderView(render);