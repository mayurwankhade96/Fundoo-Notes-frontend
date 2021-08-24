import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit
{

  constructor(private noteService: NotesService) { }

  ngOnInit(): void
  {
  }

  GetNotes()
  {
    return this.noteService.getNotes().subscribe(response => console.log(response));
  }
}
