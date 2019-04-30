module.exports = class weatherModel {
    constructor(){
        this.d = fetch("api.openweathermap.org/data/2.5/weather?q=London")
        .then(res => console.log(res))
    }
    get d(){
        return d;
    }
}