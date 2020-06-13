const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=4631ca23730f02b815debb1081a335e2&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    if(error) {
            console.log('Unable to connect to the internet')
    }
    else if(response.body.error) {
        console.log('Unable to find location')
    }
    else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.feelslike + '% chance of rain')
    }
})


const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/jagadhri.json?access_token=pk.eyJ1Ijoia2FyYW52NTk4IiwiYSI6ImNrNTY3eHAweTBleDEzZXM3cWNxazlqOXEifQ.oFS1K6mkxU4Ya_k8xVL2eQ'

request({ url: geoCodeURL, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to location services')
    }
    else if(response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    }
    else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})