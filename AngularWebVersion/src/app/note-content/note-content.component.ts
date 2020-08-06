import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../note/note';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.css']
})
export class NoteContentComponent implements OnInit {

  @Input() buttonName: string;
  note: Note;
  @Output() operactionToEmit = new EventEmitter<Note>();
  @Output() visible = new EventEmitter<boolean>();
  private noteForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  get newNote(): Note {
    return this.note;
  }

  @Input()
  set newNote(note: Note) {
    this.note = note;
    console.log('noteForm => ', this.noteForm);
    this.noteForm?.setValue({title: note.note_name, value: note.note_value});
  }

  get nForm(): FormGroup {
    return this.noteForm;
  }

  set nForm(form: FormGroup) {
    this.noteForm = form;
  }

  ngOnInit(): void {
    this.initForm();

    console.log('noteForm onInit => ', this.noteForm);
  }

  onSubmit(): void {
    const nNote: Note = {
        note_id: this.note.note_id,
        note_name: this.noteForm.get('title').value,
        note_value: this.noteForm.get('value').value,
      }
    ;
    this.operactionToEmit.emit(nNote);
  }

  discard(): void {
    this.visible.emit(false);
    console.log('content note send value false');
  }

  private initForm(): void {
    this.noteForm = this.fb.group({
        title: ['', Validators.required],
        value: ['', Validators.required]
      }
    );
  }
}

