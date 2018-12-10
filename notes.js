const fs = require('fs');

var fetchNotes = () => {
  try {
    // Fetch the notes from file
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {

  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  // var duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });
  // Which is the same as this in ES6 form:
  var duplicateNotes = notes.filter((note) => note.title === title);

  // Check if a note with this title already exists:
  if (duplicateNotes.length === 0) {
    // Write notes to the file
    notes.push(note); // Add note to the array
    saveNotes(notes);

    return note;
  }
  // If no return specified then undefined is returned.
};

var getAll = () => {
  //console.log('Getting all notes');

  return fetchNotes();
};

var getNote = (title) => {
  //console.log('Getting note ', title);
  var notes = fetchNotes();
  var noteWanted = notes.filter((note) => note.title === title);

  return noteWanted[0];
};

var removeNote = (title) => {
  // fetch notes
  var notes = fetchNotes();
  // filter out notes removing one with title of argument
  var remainingNotes = notes.filter((note) => note.title !== title);
  // save new notes array
  saveNotes(remainingNotes);

  return notes.length !== remainingNotes.length;
};

var logNote = (note) => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote, // identical to: addNote: addNote
  getAll,
  getNote,
  removeNote,
  logNote
};
