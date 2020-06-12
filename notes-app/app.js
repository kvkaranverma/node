const notes = require('./notes')
const chalk = require('chalk')

console.log(chalk.blue(notes()))
console.log(chalk.bold.bgRed.green('success'))
console.log(chalk.blue.inverse('danger'))

console.log(process.argv[2])