import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../note/note';
import {NoteServiceService} from '../note/note-service.service';

@Component({
  selector: 'app-modify-note',
  templateUrl: './modify-note.component.html',
  styleUrls: ['./modify-note.component.css']
})
export class ModifyNoteComponent implements OnInit {

  @Input() modifyNote: Note;
  @Output() showModifyPanelEmit = new EventEmitter<boolean>();
  buttonName = 'SAVE FROM MODIFY';


  constructor(private noteService: NoteServiceService) {
  }

  ngOnInit(): void {
    console.log(this.modifyNote);
  }

  saveModifiedNote(note: Note): void {
    console.log('modified note to save: ', note);
    this.noteService.modify(this.modifyNote.note_id, note).subscribe();

    this.showModifyPanelEmit.emit(false);
  }
}
