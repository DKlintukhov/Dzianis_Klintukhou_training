var showWeatherController = (function() {

    function weatherHandler() {
        console.log("get Weather");
        console.log(this.event);
    }

    return {
        weatherHandler: weatherHandler
    }
})()