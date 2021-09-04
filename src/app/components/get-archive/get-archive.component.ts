import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-get-archive',
  templateUrl: './get-archive.component.html',
  styleUrls: ['./get-archive.component.scss']
})
export class GetArchiveComponent implements OnInit
{

  token: any;
  archiveNotes: any = [];

  constructor(private noteService: NotesService,
    private dataService: DataService) { }

  ngOnInit(): void
  {
    this.displayArchiveNotes();
    this.dataService.receivingSource.subscribe(response =>
    {
      console.log(response);
      this.displayArchiveNotes();
    })
  }


  displayArchiveNotes()
  {
    this.noteService.getArchiveNotes('Notes/archive').subscribe((response: any) =>
    {
      console.log(response);
      this.archiveNotes = response.data;
      console.log(this.archiveNotes);
    });
  }
}
