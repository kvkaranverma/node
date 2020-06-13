const request = require('postman-request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia2FyYW52NTk4IiwiYSI6ImNrNTY3eHAweTBleDEzZXM3cWNxazlqOXEifQ.oFS1K6mkxU4Ya_k8xVL2eQ'

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        }
        else if(response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        }
        else {
            const coordinates = response.body.features[0];
            callback(undefined, {
                latitude: coordinates.center[0],
                longitude: coordinates.center[1],
                location: coordinates.place_name
            })
        }
    })
}

module.exports = geoCode