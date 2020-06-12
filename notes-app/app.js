const notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
  
    handler: function(){
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Reading a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)