var Notes = Notes || {};

Notes.controller = (function ($, dataContext) {

    /*** Instance Variables ***/
    var notesListSelector = "#notes-list-content";
    var noNotesCachedMsg = "</pre><div>No notes cached</div><pre>";
    var notesListPageId = "notes-list-page";
    var currentNote = null;
    
    /*** Private Functions ***/
    function onPageChange(event, data) {
        var toPageId = data.toPage.attr("id");

        switch (toPageId) {
            case notesListPageId:
                renderNotesList();
                break;
        }
    }
    
    function renderNotesList() {
        
        var notesList = dataContext.getNotesList();
        var view = $(notesListSelector);
        
        view.empty();
        
        if (notesList.length === 0) {
            $(noNotesCachedMsg).appendTo(view);
        } else {
            var notesCount = notesList.length;
            var note;
            var ul = $("<ul id=\"notes-list\" data-role=\"listview\"></ul>").appendTo(view);
            for (var i = 0; i < notesCount; i++) {
                note = notesList[i];
                $("<li>"
                + "<a data-url=\"index.html#note-editor-page?noteId=" + note.id + "\" href=\"index.html#note-editor-page?noteId=" + note.id + "\">"
                + "<div>" + note.title + "</div>"
                + "<div class=\"list-item-narrative\">" + note.body + "</div>"
                + "</a>"
                + "</li>").appendTo(ul);
            }
        
            ul.listview();
        }
    };
    
    
    /*** Public Functions ***/

    function init() {
        dataContext.init();
        var doc = $(document);
        doc.bind("pagechange", onPageChange);
    }

    /*** Public API Definition ***/

    return {
        init: init
    }


})(jQuery, Notes.dataContext);