import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../note/note';
import {NoteServiceService} from '../note/note-service.service';

@Component({
  selector: 'app-modify-note',
  templateUrl: './modify-note.component.html',
  styleUrls: ['./modify-note.component.css']
})
export class ModifyNoteComponent implements OnInit {

  buttonName = 'SAVE FROM MODIFY';
  @Output() closeCard = new EventEmitter<boolean>();
  @Output() refreshNote = new EventEmitter<Note>();
  private modifyNote: Note = {
    note_id: 0,
    note_name: '',
    note_value: '',
  };

  constructor(private noteService: NoteServiceService) {
  }

  get newModifyNote(): Note {
    return this.modifyNote;
  }

  @Input()
  set newModifyNote(note: Note) {
    this.modifyNote = note;
  }

  ngOnInit(): void {
    this.modifyNote = {
      note_id: 0,
      note_name: '',
      note_value: '',
    };
  }



  disableCard(disabled: boolean): void {
    console.log('discard from modify: ', disabled);
    this.closeCard.emit(disabled);

  }
  saveModifiedNote(note: Note): void {
    this.noteService.modify(this.modifyNote.note_id, note).subscribe();
    this.closeCard.emit(false);
    this.refreshNote.emit(note);
  }
}
