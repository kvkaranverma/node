const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Hello, Help page up!')
})

app.get('/about', (req, res) => {
    res.send('Hello, About page up!')
})

app.get('/weather', (req, res) => {
    res.send('Hello, Weather page up!')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})