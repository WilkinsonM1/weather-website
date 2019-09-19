const request = require('request')

const apikey = "d4b693d843f9b93d20786aae043796d4"

const {promisify} = require('util')

const promisifiedRequest = promisify(request)



const getWeather = async (locationData) => {
    try {
        let data = await promisifiedRequest({url:`https://api.darksky.net/forecast/${apikey}/${locationData.long}, ${locationData.lat}`, 
    json: true })
    return(
        data.body.currently)
    } catch (error) {
        console.log("oops there's been a problem")
        
    }
}






module.exports = {
    getWeather
}