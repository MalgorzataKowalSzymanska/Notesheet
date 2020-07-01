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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WelcomeComponent } from './welcome/welcome.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import {MatTableModule} from '@angular/material/table';

export const routingConfig: Routes = [
  {path: 'home', component: WelcomeComponent},
  {path: 'note/display', component: NoteListComponent},
  {path: 'note/add', component: CreateNoteComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    HeaderComponent,
    WelcomeComponent,
    CreateNoteComponent
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
    BrowserAnimationsModule,
    MatTableModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  MatSidenavModule;
  MatToolbarModule;
  MatTableModule;
}
