import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from "app/notes/note.model";
import { NotePriority } from './notes/note.model';

@Component({
    selector: 'note-list',
    templateUrl: './note-list.component.html'
})
export class NoteListComponent {
  @Input() notes = [] as Note[];
  @Output() selectNote = new EventEmitter<Note>();
  @Output() removeNote = new EventEmitter<Note>();
  @Output() editNote = new EventEmitter<Note>();

  @Input() search = false;
  noteFilter: any = {};
  selectedNote: Note;
  notePriorities: NotePriority[] = [];

  today: Date;
  twoWeeksForward: Date;

  constructor() {
		for (var notePriority in NotePriority) {
			this.notePriorities.push(NotePriority[notePriority]);
		}

    this.today = new Date();
    this.twoWeeksForward = new Date();
    this.twoWeeksForward.setDate(this.twoWeeksForward.getDate() + 1);

    console.log(this.today)
    console.log(this.twoWeeksForward)
	}

  public select(note: Note) {
    this.selectedNote = note;
    this.selectNote.emit(note);
  }

  public remove(note: Note): void {
    this.removeNote.emit(note);
  }

  public edit(note: Note) {
    this.editNote.emit(note);
  }

}