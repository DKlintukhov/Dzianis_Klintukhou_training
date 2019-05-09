var datesView = (function (controllers) {

    function isCurrentDate(date, month, year) {
        var _date = new Date();
        return _date.getDate() === date
            && _date.getMonth() === month
            && _date.getFullYear() === year
    }

    function render(datesViewModel) {
        var node = document.createElement(datesViewModel.tag);
        
        node.className = datesViewModel.style;
        node.id = datesViewModel.id;

        for (let index = 0, i = 1; index < datesViewModel.content.length; index++) {
            var date = document.createElement(datesViewModel.tag);
            var currentDate = isCurrentDate(datesViewModel.currentDay, datesViewModel.currentMonth, datesViewModel.currentYear);
            
            if (index + 1 < datesViewModel.dateOfWeek) {
                date.className = datesViewModel.date.style;
                date.classList.add(datesViewModel.prevDate.style);

            } else if (i > datesViewModel.currentMonthLastDay) {
                date.className = datesViewModel.date.style;
                date.classList.add(datesViewModel.nextDate.style);

            } else if (i === datesViewModel.currentDay && currentDate) {
                date.classList.add(datesViewModel.currentDate.style);
                i++;

            } else {
                date.className = datesViewModel.date.style;
                i++;
            }

            date.textContent = datesViewModel.content[index];
            node.appendChild(date);
        }

        libDOM.isElemInDom(document.getElementById(datesViewModel.id), document.getElementById(datesViewModel.parentId));
        libDOM.addToParent(datesViewModel.parentId, node, "beforeEnd");

        node.addEventListener("click", controllers.weatherDialogBoxController.onClickWeather);
    }

    return {
        render: render
    }
})(controllersObserver._getControllers);