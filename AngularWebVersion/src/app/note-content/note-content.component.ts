import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../note/note';


@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.css']
})
export class NoteContentComponent implements OnInit {

  @Input() buttonName: string;
  @Input() note: Note;
  @Output() operactionToEmit = new EventEmitter<Note>();

  constructor() { }

  ngOnInit(): void {}

  sendNoteToParent(note: Note) {
    this.operactionToEmit.emit(note);
  }
}
