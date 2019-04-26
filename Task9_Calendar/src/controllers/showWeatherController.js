var showWeatherController = (function() {

    var state = {
        isShow: false,
        classBg: null
    }

    function weatherHandler() {

        var MONTHS = {
            November: 10,
            March: 2,
            February: 1,
            June: 5,
            May: 4,
            September: 8,
            August: 7,
            December: 11
        }

        var currentMonth = dateModel.getCurrentMonth();

        // переключение классов
        function toggleBg(rmClass, newClass) {
            dialogBoxComponent.classList.remove(rmClass);
            state.classBg = newClass;
            dialogBoxComponent.classList.add(state.classBg);
        }

        if(state.isShow == false) {
            dialogBoxComponent.classList.remove("__hide");
        }

        if(event.target.classList.contains("calendar__date_next")) {
            dateModel.incrementCurrentMonth();
        }

        if(event.target.classList.contains("calendar__date_prev")) {
            dateModel.decrementCurrentMonth();
        }

        if(state.isShow == true) {
            dialogBoxComponent.classList.add("__hide");
        }

        if(dateModel.getCurrentMonth() > MONTHS.November || dateModel.getCurrentMonth() < MONTHS.March) {
         toggleBg(state.classBg, "__bg-winter");
        }

        if(dateModel.getCurrentMonth() > MONTHS.February && dateModel.getCurrentMonth() < MONTHS.June) {
         toggleBg(state.classBg, "__bg-spring");
        }

        if(dateModel.getCurrentMonth() > MONTHS.May && dateModel.getCurrentMonth() < MONTHS.September) {
         toggleBg(state.classBg, "__bg-summer");
        }

        if(dateModel.getCurrentMonth() > MONTHS.August && dateModel.getCurrentMonth() < MONTHS.December) {
         toggleBg(state.classBg, "__bg-autumn");
        }

        dialogBoxComponent.style.top = 25 + "%";
        dialogBoxComponent.style.left = 19 + "%";
        
        dateModel.setCurrentMonth(currentMonth);

        state.isShow = !state.isShow;
    }

    function closeWeather() {
        dialogBoxComponent.classList.add("__hide");
        state.isShow = !state.isShow;
    }

    return {
        weatherHandler: weatherHandler,
        closeWeather: closeWeather
    }
})();