var weatherModel = (function () {

    function getViewModel(data) {
        var weatherViewModel = {
            tag: "div",
            id: "js-weather",
            parentId: "js-dialogBox",
            style: "weather",
            content: {
                city: {
                    tag: "h3",
                    style: "weather",
                    content: "Город: Могилев"
                },
                wind: {
                    tag: "h3",
                    style: "weather",
                    content: "Ветер: " + data.wind + " км/ч"
                },
                temp: {
                    tag: "h3",
                    style: "weather",
                    content: "Температура: " + data.temp + " \u2103"
                },
                desc: {
                    tag: "h3",
                    style: "weather",
                    content: data.desc
                }
            }
        }

        return weatherViewModel;
    }

    return {
        getViewModel: getViewModel
    }
})();
