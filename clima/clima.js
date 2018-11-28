const axios = require('axios');



const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=37281a9b5f0756156de571be5cd0d409&units=metric`)
        //axios...
    return resp.data.main.temp;
}


module.exports = {
    getClima
}