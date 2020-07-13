import {Component, OnInit} from '@angular/core';

import {NoteServiceService} from '../note/note-service.service';
import {Note} from '../note/note';

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
    console.log('note do save', note);
    this.noteService.post(note).subscribe();
  }

}
