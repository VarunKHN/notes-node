const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = {
    describe: 'Title',
    demand: true,
    alias: 't'
}

var bodyOptions = {
    describe: 'Body',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add','Add new note',{
        title:titleOptions,
        body:bodyOptions
    })
    .command('list','List all notes')
    .command('read','Reading a note',{
        title:titleOptions
    })
    .command('remove','Removing a note',{
        title:titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

// console.log(command);
// console.log('Process', process.argv);
// console.log('Yargs', argv);

if(command === 'add'){
    var note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log('Note created');
        notes.logNote(note);
    }else{
        console.log('Note present');
    }
}else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'read'){
    var note = notes.readNote(argv.title);
    if(note){
        console.log('Note read');
        notes.logNote(note);
    }else{
        console.log('Note not available');
    }
}else if(command === 'remove'){
    var notRemoved = notes.removeNote(argv.title);
    var message = notRemoved ? 'Note removed' : 'Note not removed';
    console.log(message);
}else{
    console.log('Command no haaap');
}
