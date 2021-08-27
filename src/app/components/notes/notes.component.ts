import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit
{

  message: any;
  notes: any = [];
  constructor(private noteService: NotesService) { }

  ngOnInit(): void
  {
    this.displayNotes();
  }

  displayNotes()
  {
    this.noteService.getAllNotes('Notes').subscribe((response: any) =>
    {
      console.log(response);
      this.notes = response.data;
      this.notes.reverse();
      console.log(this.notes);
    });
  }

  autoRefresh(value: any)
  {
    console.log(value);
    this.displayNotes();
  }
}
