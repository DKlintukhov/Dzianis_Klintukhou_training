const rp = require('request-promise');

module.exports = async (req, res) => {
    const city = "Mahilyow";
    const uri = `http://api.openweathermap.org/data/2.5/weather`;
    const key = "60063a80d3881fe48a0ed25718088235";
    const lang = "ru";
    const units= "imperial";

    const options = {
        uri,
        qs: {
            appid: key,
            q: city,
            lang,
            units
        },
        json: true
    }
    
    try {
        const data = await rp(options);
        res.status(200).json({
            data: data
        })
    } catch (error) {
        res.status(404).json({
            res: error
        })
    }
}
