// var obj = {
//     name : "Varun"
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof(obj));
// console.log(typeof(stringObj));

// console.log(stringObj);

// console.log('-----');

// var objAgain = JSON.parse(stringObj);

// console.log(typeof(objAgain));
// console.log(objAgain);


const fs = require('fs');

var originalNote = {
    title : 'Title One',
    body : 'Body One'
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);

console.log(note.title);
