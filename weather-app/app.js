const yargs = require('yargs')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

yargs.command({
    command: 'temperature',
    describe: 'Gives the weather report',
    builder: {
        location: {
            describe: 'Location, whose weather report is to be generated',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        geoCode(argv.location, (error, { latitude, longitude, location } = {}) => {
            if(error) {
                return console.log(error)
            }
            forecast(latitude, longitude, (error, result) => {
                if(error) {
                    return console.log(error)
                }
                console.log(result)
            })
        })
    }
})

yargs.parse()