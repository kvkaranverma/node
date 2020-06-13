const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send([
        {
        name: 'Karan',
        age: 23
        },
        {
            name: 'Elena',
            age: 23
        }
    ])
})

app.get('/about', (req, res) => {
    res.send('<h2>Hello, About page up!</h2>')
})

app.get('/weather', (req, res) => {
    res.send('<h2>Weather page up</h2>')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})