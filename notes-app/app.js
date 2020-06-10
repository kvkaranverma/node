const fs = require('fs')
const utils = require('./utils.js')
const notes = require('./notes')

fs.writeFileSync('notes.txt', 'This file was created by node js!')

fs.appendFileSync('notes.txt', ' Karan here!')

const name = 'Karan'

console.log(name)

console.log(utils.name_2)

console.log(utils.add(2, 3))

console.log(notes())