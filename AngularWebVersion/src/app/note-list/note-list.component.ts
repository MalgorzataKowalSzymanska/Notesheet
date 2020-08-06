import {Component, OnInit} from '@angular/core';
import {NoteServiceService} from '../note/note-service.service';
import {Note} from '../note/note';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  noteToModify: Note;
  noteList: Note[];
  noteDataSource = new MatTableDataSource<Note>(this.noteList);
  displayedColumns: string[] = ['note_id', 'note_name', 'note_value', 'action'];
  closeSidenav: boolean;
  modifiedNote: Note;

  constructor(private noteService: NoteServiceService) {
  }

  ngOnInit(): void {
    this.noteService.get().subscribe(data => {
      this.noteList = data;
      this.noteDataSource = new MatTableDataSource<Note>(this.noteList);
    });
  }

  deleteNote(id: number): void {
    this.noteService.deleteById(id).subscribe(note => {
      for (let i = 0; i < this.noteList.length; i++) {
        if (this.noteList[i].note_id === id) {
          this.noteList.splice(i, 1);
          this.noteDataSource = new MatTableDataSource<Note>(this.noteList);
        }
      }
    });
  }

  setDisabledSidenav(disabled: boolean): void {
    this.closeSidenav = disabled;
  }

  modifyNote(note: Note): void {
    this.noteToModify = note;
  }

  displayLog(message: string): void {
    console.log(message);
  }

  setModifiedNote(note: Note): void {
    this.modifiedNote = note;
  }

  refreshNoteTable(): void {
    console.log('note\'s value after modify:', this.modifiedNote);
    for (let i = 0; i < this.noteList.length; i++) {
      if (this.noteList[i].note_id === this.modifiedNote.note_id) {
        this.noteList[i] = this.modifiedNote;
        this.noteDataSource = new MatTableDataSource<Note>(this.noteList);
      }
    }
  }

}
