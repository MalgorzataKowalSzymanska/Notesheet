import {Component, OnInit} from '@angular/core';

import {NoteServiceService} from '../note/note-service.service';
import {Note} from '../note/note';
import {routingConfig} from '../app.module';
import {string} from 'prop-types';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  newNote: Note;
  buttonName: string = 'SAVE FROM CREATE';

  constructor(private noteService: NoteServiceService) {
  }

  ngOnInit(): void {
    this.newNote  = {
      note_value: null,
      note_name: null,
      note_id: null,
    };
  }

  saveNote(note: Note): void {
    this.noteService.post(note).subscribe();
  }
  rdirectToHome(closeCard: boolean): void {
    console.log('close the window');
    document.getElementById('redirectToHome').click();

  }
}
