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

  getArchiveNotes(url: any)
  {
    return this.httpService.getArchiveNotes('Notes/archive');
  }

  getTrashNotes(url: any)
  {
    return this.httpService.getArchiveNotes('Notes/trash');
  }

  updateNote(data: any)
  {
    return this.httpService.updateNote(data);
  }

  trashNote(data: any)
  {
    return this.httpService.trashNote(data);
  }

  deleteNote(data: any)
  {
    return this.httpService.deleteNote(data);
  }

  archiveNote(data: any)
  {
    return this.httpService.archiveNote(data);
  }
}
