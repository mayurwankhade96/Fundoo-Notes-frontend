import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit
{
  token: any;
  // message: any;
  @Input() notes: any = [];

  constructor(private noteService: NotesService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void
  {
    // this.displayNotes();
  }

  // displayNotes()
  // {
  //   this.noteService.getAllNotes('Notes').subscribe((response: any) =>
  //   {
  //     console.log(response);
  //     this.notes = response.data;
  //     console.log(this.notes);
  //   });
  // }

  openDialog(): void
  {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '650px',
      data: this.notes
    });

    dialogRef.afterClosed().subscribe()
  }

  // autoRefresh(event: any)
  // {
  //   this.message = event;
  //   this.displayNotes();
  // }
}
