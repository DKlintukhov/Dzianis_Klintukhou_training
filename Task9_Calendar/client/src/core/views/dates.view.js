var datesView = (function () {

    function render(datesViewModel) {

        var node = document.createElement(datesViewModel.tag);
        node.className = datesViewModel.style;
        node.id = datesViewModel.id;

        for (let index = 0, i = 1; index < datesViewModel.content.length; index++) {

            var date = document.createElement(datesViewModel.tag);
            
            if (index + 1 < datesViewModel.dateOfWeek) {
                date.className = datesViewModel.date.style;
                date.classList.add(datesViewModel.prevDate.style);

            } else if (i > datesViewModel.currentMonthLastDay) {
                date.className = datesViewModel.date.style;
                date.classList.add(datesViewModel.nextDate.style);

            } else if (i === datesViewModel.currentDay && lib.isCurrentDate(datesViewModel.currentDay, datesViewModel.currentMonth, datesViewModel.currentYear)) {
                date.className = datesViewModel.date.style;
                date.classList.add(datesViewModel.currentDate.style);
                i++;

            } else {
                date.className = datesViewModel.date.style;
                i++;

            }

            date.textContent = datesViewModel.content[index];
            node.appendChild(date);
            node.addEventListener(datesViewModel.handler.event, datesViewModel.handler.func)
        }

        lib.isElemInDom(document.getElementById(datesViewModel.id), document.getElementById(datesViewModel.parentId));
        lib.addToParent(datesViewModel.parentId, node, "beforeEnd");

        node.addEventListener(datesViewModel.handler.event, datesViewModel.handler.func);
    }

    return {
        render: render
    }
})();