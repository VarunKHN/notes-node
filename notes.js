const fs = require('fs');

var fetchNotes = () => {
    try{
        var getnotes = fs.readFileSync('notes-data.json');
        return JSON.parse(getnotes);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var noteObj = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(noteObj);
        saveNotes(notes);
        return noteObj;
    }
    
}

var getAll = () => {
    return fetchNotes();
}

var readNote = (title) => {
    var allNotes = fetchNotes();
    var filteredNotes = allNotes.filter((note) => note.title === title);
    return filteredNotes[0];
}

var logNote = (note) => {
    console.log('----');
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
}

var removeNote = (title) => {
    var allNotes = fetchNotes();
    var filteredNotes = allNotes.filter((note) => note.title != title);
    saveNotes(filteredNotes);
    return allNotes.length !== filteredNotes.length;
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
};
