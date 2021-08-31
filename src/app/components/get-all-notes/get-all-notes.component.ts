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
  @Input() notes: any = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void
  {
  }


  openDialog(note: any): void
  {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '600px',
      data: note
    });

    dialogRef.afterClosed().subscribe()
  }
}
