const {getWeather} = require('./getWeather')
const {getLocation} = require('./getLocation')


const {promisify} = require('util')



const main = async (place) => {
    const location = await getLocation(place)
    const weather = await getWeather(location)
   
    const locationArr = location.name.split(",")

   
    return {weatherData: weather,
            placeData: `${locationArr[0]},${locationArr[locationArr.length -1]}`}
}
module.exports = {
    main
}
