const fs = require('fs')

// const Book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(Book)
//fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const readFileBuffer = fs.readFileSync('1-json.json')
const readFile = readFileBuffer.toString()
const data = JSON.parse(readFile)
data.name = 'Karan'
data.age = '23'
const jsonData = JSON.stringify(data)

fs.writeFileSync('1-2-json.json', jsonData)