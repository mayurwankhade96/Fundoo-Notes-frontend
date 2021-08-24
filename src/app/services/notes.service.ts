import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService
{

  constructor(private httpService: HttpService) { }

  headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + localStorage.getItem('FunDooJwt'));
  options = { headers: this.headers };

  getNotes()
  {
    return this.httpService.GetNotes("/Notes", this.options);
  }
}
