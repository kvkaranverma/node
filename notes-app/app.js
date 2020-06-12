const notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Remove the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function(){
        console.log('Listing notes!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function(){
        console.log('Reading notes!')
    }
})

console.log(yargs.argv)