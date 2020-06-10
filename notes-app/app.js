const notes = require('./notes')
const validator = require('validator')

console.log(notes())

console.log(validator.isEmail('karan@gmail.com'))

console.log(validator.isURL('http:/www.google.com'))