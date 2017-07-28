import { OnChanges, Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from "app/notes/note.model";
import { NotePriority } from './notes/note.model';
import { IMyOptions, IMyDateModel, IMyDate, IMyInputFieldChanged } from 'mydatepicker';

@Component({
    selector: 'note-form',
    templateUrl: './note-form.component.html'
})
export class NoteFormComponent implements OnChanges {
	@Output() notes = new EventEmitter<Note>();
	@Input() note = {} as Note;
	newNote = {} as Note;
	notePriorities: NotePriority[] = [];
	selDate: IMyDate;
	edit = false;

	myDatePickerOptions: IMyOptions = {
        editableDateField: false, dateFormat: 'dd.mm.yyyy', disableUntil: this.today(),
    };

    ngOnChanges(changes: any) {

    	this.newNote.title = this.note.title;
    	this.newNote.content = this.note.content;
    	this.newNote.priority = this.note.priority;
    	this.newNote.dueDate = this.note.dueDate;
    	this.newNote.dueDateFormatted = this.note.dueDateFormatted;
    	this.newNote.createdOn = this.note.createdOn;

    	if (this.newNote.title != null) {
    		this.edit = true;
			this.parseValue(this.newNote.priority);
			let d = this.newNote.dueDate; this.selDate = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
		}
    }

	constructor() {
		for (var notePriority in NotePriority) {
			this.notePriorities.push(NotePriority[notePriority]);
		}
	}

	parseValue(value) {
    	this.newNote.priority = NotePriority[value];
  	}

	clearDate() {
        this.selDate = this.today();
    }

	onDateChanged(event: IMyDateModel) {
		if(new Date() > new Date(event.jsdate)) {
			this.clearDate();
		} else {
			this.selDate = event.date;
		}
	}

	today(): IMyDate {
    	let d = new Date(); return { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
    }

	public addNewNote() {

		this.newNote.dueDate = new Date(this.newNote.dueDate['jsdate']);
		this.newNote.dueDateFormatted = this.newNote.dueDate['formatted'];

		this.note.title = this.newNote.title;
		this.note.content = this.newNote.content;
		this.note.priority = this.newNote.priority;
		this.note.dueDate = this.newNote.dueDate;
		this.note.dueDateFormatted = this.newNote.dueDateFormatted;
		this.note.createdOn = this.newNote.createdOn;

		if (!this.edit) {
			this.note.createdOn = new Date();
	  		this.notes.emit(this.note);
		}

		this.note = {} as Note;
	    this.newNote = {} as Note;
	    this.edit = false;
	}
}