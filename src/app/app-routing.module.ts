import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { GetArchiveComponent } from './components/get-archive/get-archive.component';
import { GetTrashComponent } from './components/get-trash/get-trash.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'forget', component: ForgetPasswordComponent },
  { path: 'reset/:token', component: ResetPasswordComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'Dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'notes', pathMatch: 'full' },
      { path: 'notes', component: NotesComponent },
      { path: 'archive', component: GetArchiveComponent },
      { path: 'trash', component: GetTrashComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
