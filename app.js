const {getWeather} = require('./getWeather')
const {getLocation} = require('./getLocation')


const {promisify} = require('util')




const main = async (place) => {
    const location = await getLocation(place)
    const weather = await getWeather(location)
    const celsius = Math.round((weather.temperature-32)*5/9)

    console.log(data)
    console.log(`The temperature in ${location.name} is ${celsius}°C and the probability of rain is ${weather.precipProbability*100}%`)
}
main()
