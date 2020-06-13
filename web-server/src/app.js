const express = require('express')
const path = require('path')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')

// Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Karan Verma'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Karan Verma'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help'
    })
})

app.get('/weather', (req, res) => {
    res.send('<h2>Weather page up</h2>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})