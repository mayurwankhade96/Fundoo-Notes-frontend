import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit
{
  token: any;
  @Input() notes: any = [];

  constructor(private noteService: NotesService, private route: ActivatedRoute) { }

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
      console.log(this.notes);
    });
  }
}
