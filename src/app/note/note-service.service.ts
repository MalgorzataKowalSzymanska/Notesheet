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

}
