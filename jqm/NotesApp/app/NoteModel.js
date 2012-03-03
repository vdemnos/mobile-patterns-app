var Notes = Notes || {};

Notes.NoteModel = function (config) {
    this.id = config.id;
    this.date = config.date;
    this.title = config.title;
    this.body = config.body;
};