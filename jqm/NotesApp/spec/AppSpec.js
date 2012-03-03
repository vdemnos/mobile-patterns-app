describe( "API is defined", function() {
    
    it( "Defines the dataContext", function() {
        expect(Notes.dataContext).toBeDefined();
    });
    
    it( "Has public function: getNotesList", function() {
        expect(Notes.dataContext.getNotesList).toBeDefined();
    });
    it( "Has public function: createNote", function() {
        expect(Notes.dataContext.createNote).toBeDefined();
    }); 
    it( "Has public function: saveNote", function() {
        expect(Notes.dataContext.saveNote).toBeDefined();
    }); 
    it( "Has public function: deleteNote", function() {
        expect(Notes.dataContext.deleteNote).toBeDefined();
    });    
    it( "Has public function: init", function() {
        expect(Notes.dataContext.init).toBeDefined();
    }); 
});

describe( "API functions properly", function() {
    
    it( "getNotesList: returns Array", function() {
        var lNotesArray = Notes.dataContext.getNotesList();
        expect(lNotesArray instanceof Array ).toBeTruthy(); 
    });
    it( "createNote: returns new note with empty title and body", function() {
        var lNote = Notes.dataContext.createNote();
        expect(lNote.title).toBeDefined(); 
        expect(lNote.body).toBeDefined();
        expect(lNote.title.length === 0).toBeTruthy();
        expect(lNote.body.length === 0).toBeTruthy();
    });    

    it( "init: populates Notes List if data is stored", function() {
        var notesListStorageKey = "Notes.NotesList";
        var notesCount = 10;
        var notes = [];
        for (var i = 0; i < notesCount; i++) {
            var note = Notes.dataContext.createNote();
            note.title = "Title " + i;
            note.body = "Narrative " + i;
            notes.push(note);
        }

        $.jStorage.set(notesListStorageKey, notes);

        Notes.dataContext.init();
        var lNotes = Notes.dataContext.getNotesList();
        expect(lNotes).toBeDefined(); 
        expect(lNotes.length === notesCount).toBeTruthy();
        console.log(lNotes);
        expect(lNotes[0].title === "Title 0").toBeTruthy();
        expect(lNotes[0].body === "Narrative 0").toBeTruthy();

    });
   
});