var datesView = (function (controllers) {

    function render(datesViewModel) {
        var node = document.createElement(datesViewModel.tag);
        
        node.className = datesViewModel.style;
        node.id = datesViewModel.id;

        for (let index = 0, i = 1; index < datesViewModel.content.length; index++) {
            var date = document.createElement(datesViewModel.tag);
            var isCurrentDate = lib.isCurrentDate(datesViewModel.currentDay, datesViewModel.currentMonth, datesViewModel.currentYear);
            
            if (index + 1 < datesViewModel.dateOfWeek) {
                date.className = datesViewModel.date.style;
                date.classList.add(datesViewModel.prevDate.style);

            } else if (i > datesViewModel.currentMonthLastDay) {
                date.className = datesViewModel.date.style;
                date.classList.add(datesViewModel.nextDate.style);

            } else if (i === datesViewModel.currentDay && isCurrentDate) {
                date.classList.add(datesViewModel.currentDate.style);
                i++;

            } else {
                date.className = datesViewModel.date.style;
                i++;
            }

            date.textContent = datesViewModel.content[index];
            node.appendChild(date);
        }

        lib.isElemInDom(document.getElementById(datesViewModel.id), document.getElementById(datesViewModel.parentId));
        lib.addToParent(datesViewModel.parentId, node, "beforeEnd");

        node.addEventListener("click", controllers.weatherDialogBoxController.onClickWeather);
    }

    return {
        render: render
    }
})(controllers);