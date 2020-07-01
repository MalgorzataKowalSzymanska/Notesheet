import {Component, OnInit} from '@angular/core';
import {NoteServiceService} from '../note/note-service.service';
import {Note} from '../note/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  noteList: Note[];
  displayedColumns: string[] = ['note_id', 'note_name', 'note_value'];

  constructor(private noteService: NoteServiceService) {
  }

  ngOnInit(): void {
    this.noteService.get().subscribe(data => {
      this.noteList = data;
    });
  }


}
