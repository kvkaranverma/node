const fs = require('fs')

const Book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(Book)
fs.writeFileSync('1-json.json', bookJSON)