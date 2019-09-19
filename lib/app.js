const {getWeather} = require('./getWeather')
const {getLocation} = require('./getLocation')


const {promisify} = require('util')



const main = async (place) => {
    const location = await getLocation(place)
    const weather = await getWeather(location)
    const celsius = Math.round((weather.temperature-32)*5/9)
   
    return weather
}
module.exports = {
    main
}
