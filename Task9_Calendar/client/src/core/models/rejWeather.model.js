var rejWeatherModel = (function () {
    
    function getViewModel(data) {
        var rejWeatherViewModel = {
            tag: "div",
            id: "js-weather",
            parentId: "js-dialogBox",
            style: "weather",
            content: "Погода не доступна",
        }

        return rejWeatherViewModel
    }

    return {
        getViewModel: getViewModel
    }
})();
