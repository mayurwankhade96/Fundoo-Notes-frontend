import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService
{

  constructor(private httpService: HttpService) { }

  createNote(data: any)
  {
    return this.httpService.TakeNote('Notes', data);
  }

  getAllNotes(url: any)
  {
    return this.httpService.getNotes('Notes');
  }
}
