import { Component } from '@angular/core';
import { Note } from './notes/note.model';
import { NotePriority } from './notes/note.model';
import { NoteFormComponent } from './note-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  notes: Note[] = [];
  selectedNote: Note;
  note = {} as Note;
  create = false;
  search = false;

  constructor() {
    this.notes = [
      { title: 'First note', content: 'First note sample content', createdOn: new Date(2017, 3, 1, 15, 30), dueDate: new Date(2017, 3, 19, 0, 0), dueDateFormatted: '19.04.2017', priority: NotePriority.Do },
      { title: 'Second note', content: 'Second note sample content', createdOn: new Date(2017, 3, 2, 16, 30), dueDate: new Date(2017, 3, 22, 0, 0), dueDateFormatted: '22.04.2017', priority: NotePriority.Decide },
      { title: 'Third note', content: 'Third note sample content', createdOn: new Date(2017, 3, 3, 17, 30), dueDate: new Date(2017, 3, 23, 0, 0), dueDateFormatted: '23.04.2017', priority: NotePriority.Delegate },
      { title: 'Fourth note', content: 'Fourth note sample content', createdOn: new Date(2017, 3, 4, 18, 30), dueDate: new Date(2017, 3, 26, 0, 0), dueDateFormatted: '26.04.2017', priority: NotePriority.Delete },
    ] as Note[];

    this.selectedNote = this.notes[0];
  }

  public createNote(note: Note) {
    this.notes.push(note);
  }

  public selectNote(note: Note) {
    this.selectedNote = note;
  }

  public removeNote(note: Note) {
    this.notes = this.notes.filter(item => item !== note);
  }

  public editNote(note: Note) {
    this.create = true;
    this.note = note;
  }

  public showForm() {
    if (this.create) { this.create = false; this.note = {} as Note; } else { this.create = true }
  }
}
