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
  showModifyPanel = false;

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


  modifyNote(note: Note): void {
    this.showPanel(true);
    this.noteToModify = note;
    console.log(this.noteToModify);
  }

  showPanel(agreed: boolean): void {
    this.showModifyPanel = agreed;
  }

}
