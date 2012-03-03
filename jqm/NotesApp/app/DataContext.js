var Notes = Notes || {};


Notes.dataContext = (function () {

    /*** Instance Variables ***/
    
    var lNotesList = [];
    var lNotesListStorageKey = "Notes.NotesList";

    /*** Private Functions ***/

    function loadNotesFromLocalStorage() {
        var lStoredNotes = $.jStorage.get(lNotesListStorageKey);
    
        if (lStoredNotes !== null) {
            lNotesList = lStoredNotes;
        }
    }
    
    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

    /*** Public Functions ***/
    function init() {
        loadNotesFromLocalStorage();
    }
    
    function getNotesList() {
        return lNotesList;
    }

    function saveNote() {
        return false;
    }    
    function deleteNote() {
        return false;
    }
    
    function createNote() {
        var dateCreated = new Date();
        var id = "" + dateCreated.getTime() + getRandomInt(0, 100);
        var lNote = new Notes.NoteModel({
            id: id,
            date: dateCreated,
            title: "",
            body: ""
        });
        
        return lNote;
    }


    /*** Public API Definition ***/

    return {
        init: init,
        getNotesList: getNotesList,
        createNote: createNote,
        saveNote: saveNote,
        deleteNote: deleteNote
    };
})();