import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AuthguardService } from './services/authguard.service';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { NotesComponent } from './components/notes/notes.component';
import { TakeNoteComponent } from './components/take-note/take-note.component';
import { MatCardModule } from '@angular/material/card';
import { GetArchiveComponent } from './components/get-archive/get-archive.component';
import { GetTrashComponent } from './components/get-trash/get-trash.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { DeleteComponent } from './components/delete/delete.component';
import { IconsComponent } from './components/icons/icons.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    GetAllNotesComponent,
    NotesComponent,
    TakeNoteComponent,
    GetArchiveComponent,
    GetTrashComponent,
    UpdateNoteComponent,
    DeleteComponent,
    IconsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    ClickOutsideModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
