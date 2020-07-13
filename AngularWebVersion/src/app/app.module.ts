import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NoteListComponent} from './note-list/note-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HeaderComponent} from './navigation/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {WelcomeComponent} from './welcome/welcome.component';
import {CreateNoteComponent} from './create-note/create-note.component';
import { MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteContentComponent } from './note-content/note-content.component';
import { ModifyNoteComponent } from './modify-note/modify-note.component';


export const routingConfig: Routes = [
  {path: 'home', component: WelcomeComponent},
  {path: 'list-note', component: NoteListComponent},
  {path: 'add-note', component: CreateNoteComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    HeaderComponent,
    WelcomeComponent,
    CreateNoteComponent,
    NoteContentComponent,
    ModifyNoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routingConfig),
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
