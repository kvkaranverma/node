const notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

console.log(process.argv)
console.log(yargs.argv)
console.log(yargs.argv._)
console.log(yargs.argv.title)