import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-get-trash',
  templateUrl: './get-trash.component.html',
  styleUrls: ['./get-trash.component.scss']
})
export class GetTrashComponent implements OnInit
{

  token: any;
  @Input() trashNotes: any = [];

  constructor(private noteService: NotesService) { }

  ngOnInit(): void
  {
  }

  displayTrashNotes()
  {
    this.noteService.getTrashNotes('Notes/trash').subscribe((response: any) =>
    {
      console.log(response);
      this.trashNotes = response.data;
      console.log(this.trashNotes);
    });
  }
}
