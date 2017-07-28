import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { NoteDetailsComponent } from "app/note-details.component";
import { NoteListComponent } from "app/note-list.component";
import { NoteFormComponent } from "app/note-form.component";

@NgModule({
  declarations: [
    AppComponent,
    NoteDetailsComponent,
    NoteListComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    Ng2FilterPipeModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
