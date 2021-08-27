import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit
{

  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void
  {
  }

}
