const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4631ca23730f02b815debb1081a335e2&query='+ latitude + ','+ longitude +'&units=f'

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to the internet', undefined)
        }
        else if(response.body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.feelslike + '% chance of rain')
        }
    })
}

module.exports = forecast