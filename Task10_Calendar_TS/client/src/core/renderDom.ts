export interface IRender {
    addToParent(parentId: string, child: Element, position: InsertPosition): void;
    isElemInDom(elem: Element, parent: Element): boolean;
    classToggle(elem: Element, rmClass: string, addClass: string): void;
}

class Render implements IRender {

    addToParent(parentId: string, child: Element, position: InsertPosition): void {
        var parent = document.getElementById(parentId);
        parent.insertAdjacentElement(position, child);
    }

    classToggle(elem: Element, rmClass: string, addClass: string): void {
        elem.classList.remove(rmClass);
        elem.classList.add(addClass);
    }

    isElemInDom(elem: Element, parent: Element): boolean {
        if(elem) {
            parent.removeChild(elem);
            return true;
        }
    }
}

const render = new Render();
export default render;