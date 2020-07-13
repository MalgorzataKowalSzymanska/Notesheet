import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from './note';


@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  private noteURL: string;

  constructor(private http: HttpClient) {
    this.noteURL = '/api/v1/notes';
  }

  public get(): Observable<Note[]> {
    return this.http.get<Note[]>(this.noteURL);
  }

  public post(note: Note): Observable<Note> {
    return this.http.post<Note>(this.noteURL, {note_name: note.note_name, note_value: note.note_value});
  }

  public getById(id: number): Observable<{}> {
    const noteIdURL = `${this.noteURL}/${id}`;
    return this.http.get(noteIdURL);
  }

  public deleteById(id: number): Observable<{}> {
    const noteIdURL = `${this.noteURL}/${id}`;
    return this.http.delete(noteIdURL);
  }

  public modify(id: number, note: Note): Observable<Note> {
    const noteIdURL = `${this.noteURL}/${id}`;
    return this.http.put<Note>(noteIdURL, note);
  }
}
