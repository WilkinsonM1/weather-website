const request = require('request')

const mapApiKey = "pk.eyJ1IjoiYXRoZW1pciIsImEiOiJjazBucWlxMmowMmV4M2xtbG9pbjJ0d215In0.IUxaS4knE4C2byyDL00gOw"



const {promisify} = require('util')

const promisifiedRequest = promisify(request)

const getLocation = async (place) => {
    try {
        let data = await promisifiedRequest({url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiYXRoZW1pciIsImEiOiJjazBucWlxMmowMmV4M2xtbG9pbjJ0d215In0.IUxaS4knE4C2byyDL00gOw` , json: true})
        return({
            name: data.body.features[0].place_name,
           lat: data.body.features[0].center[0],
           long: data.body.features[0].center[1],
           
        })
    } catch (error) {
        console.log("oops there's been a problem")
    }
}

module.exports = {
    getLocation
}