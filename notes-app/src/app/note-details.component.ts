import { Component, Input } from '@angular/core';
import { Note } from "app/notes/note.model";

@Component({
    selector: 'note-details',
    templateUrl: './note-details.component.html'
})
export class NoteDetailsComponent {
    @Input() selectedNote: Note;
}