import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-get-trash',
  templateUrl: './get-trash.component.html',
  styleUrls: ['./get-trash.component.scss']
})
export class GetTrashComponent implements OnInit
{

  token: any;
  trashNotes: any = [];

  constructor(private noteService: NotesService,
    private dataService: DataService) { }

  ngOnInit(): void
  {
    this.displayTrashNotes();
    this.dataService.receivingSource.subscribe(response =>
    {
      console.log(response);
      this.displayTrashNotes();
    })
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
