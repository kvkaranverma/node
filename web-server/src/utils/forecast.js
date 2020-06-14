const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4631ca23730f02b815debb1081a335e2&query='+ latitude + ','+ longitude +'&units=f'

    request({ url, json: true }, (error, { body } = {}) => {
        if(error) {
            callback('Unable to connect to the internet', undefined)
        }
        else if(body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.feelslike + '% chance of rain')
        }
    })
}

module.exports = forecast